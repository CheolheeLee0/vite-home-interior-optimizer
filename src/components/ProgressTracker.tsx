import type { Task, TaskStatus } from '../types';

interface ProgressTrackerProps {
  tasks: Task[];
}

const getStatusText = (status: TaskStatus) => {
  switch (status) {
    case 'completed':
      return '완료';
    case 'in_progress':
      return '진행중';
    case 'pending':
      return '대기';
  }
};

const getStatusStyle = (status: TaskStatus) => {
  switch (status) {
    case 'completed':
      return 'text-gray-600';
    case 'in_progress':
      return 'text-gray-900 font-medium';
    case 'pending':
      return 'text-gray-400';
  }
};

const getDayOfWeek = (dateString: string) => {
  const date = new Date(dateString);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return days[date.getDay()];
};

const formatDateWithDay = (dateString: string) => {
  // "2025-10-03" -> "10-03"
  const monthDay = dateString.substring(5); // "10-03"
  return `${monthDay}(${getDayOfWeek(dateString)})`;
};

export default function ProgressTracker({ tasks }: ProgressTrackerProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  // 진행 상황 정보 필터링 (이모지로 시작하는 notes 추출)
  const getProgressInfo = (task: Task) => {
    if (!task.notes) return null;
    const statusNotes = task.notes.filter(note =>
      note.startsWith('📌') || note.startsWith('👷') || note.startsWith('📏')
    );
    return statusNotes.length > 0 ? statusNotes.join(' / ') : null;
  };

  // 당장 필요한 액션 플랜 추출
  const getActionPlans = () => {
    const actions: Array<{ priority: number; text: string; date?: string }> = [];

    tasks.forEach(task => {
      if (!task.notes) return;

      const hasShoppingAction = task.notes.some(n => n.startsWith('📌'));
      const hasWorkerAction = task.notes.some(n => n.startsWith('👷'));
      const hasMeasureAction = task.notes.some(n => n.startsWith('📏'));

      // 일정에서 자재 주문 날짜 추출
      const orderNote = task.notes.find(n => n.includes('자재 주문:'));
      const orderDate = orderNote?.match(/\d{1,2}\/\d{1,2}/)?.[0];

      if (task.status === 'in_progress') {
        // 철거 작업의 경우 상세 요구사항 정리 필요 포함
        if (task.id === 'demolition') {
          actions.push({ priority: 1, text: `${task.title} 진행중 (상세 요구사항 정리 필요)`, date: task.endDate ? formatDateWithDay(task.endDate) : undefined });
        } else {
          actions.push({ priority: 1, text: `${task.title} 진행중`, date: task.endDate ? formatDateWithDay(task.endDate) : undefined });
        }
      }

      if (hasMeasureAction && task.status === 'pending') {
        actions.push({ priority: 3, text: `${task.title} 실측 필요` });
      }

      if (hasShoppingAction && task.status === 'pending') {
        actions.push({ priority: 3, text: `${task.title} 자재 구매`, date: orderDate });
      }

      if (hasWorkerAction && task.status === 'pending') {
        actions.push({ priority: 4, text: `${task.title} 시공업자 구인` });
      }
    });

    return actions.sort((a, b) => a.priority - b.priority).slice(0, 6);
  };

  const actionPlans = getActionPlans();

  return (
    <div className="bg-white border border-gray-300 p-6">
      {/* 액션 플랜 */}
      {actionPlans.length > 0 && (
        <div className="mb-6 bg-yellow-50 border-2 border-yellow-400 p-4">
          <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="text-xl">⚡</span>
            <span>우선 작업 필요 항목</span>
          </h3>
          <div className="space-y-2">
            {actionPlans.map((action, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <span className="font-bold text-yellow-700 flex-shrink-0">{index + 1}.</span>
                <div className="flex-1">
                  <span className="text-gray-900">{action.text}</span>
                  {action.date && (
                    <span className="text-gray-600 ml-2">({action.date})</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">전체 진행상황</h2>

      {/* 진행률 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-700">
            작업 완료: {completedTasks} / {totalTasks}
          </span>
          <span className="text-sm text-gray-700">
            {progressPercentage.toFixed(0)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 h-2">
          <div
            className="bg-gray-800 h-2"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* 작업 목록 */}
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left py-2 px-2 font-semibold text-gray-700">No</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-700">작업명</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-700">상태</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-700">일정</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            const progressInfo = getProgressInfo(task);
            return (
              <tr key={task.id} className="border-b border-gray-200">
                <td className="py-2 px-2 text-gray-600">{index + 1}</td>
                <td className={`py-2 px-2 ${getStatusStyle(task.status)}`}>
                  <div>{task.title}</div>
                  {progressInfo && (
                    <div className="text-xs text-gray-500 mt-1">{progressInfo}</div>
                  )}
                </td>
                <td className="py-2 px-2 text-gray-600 text-xs">{getStatusText(task.status)}</td>
                <td className="py-2 px-2 text-gray-600 text-xs whitespace-nowrap">
                  {task.startDate && task.endDate
                    ? `${formatDateWithDay(task.startDate)} ~ ${formatDateWithDay(task.endDate)}`
                    : task.startDate
                    ? formatDateWithDay(task.startDate)
                    : '-'}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
