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
  return `${dateString}(${getDayOfWeek(dateString)})`;
};

export default function ProgressTracker({ tasks }: ProgressTrackerProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  return (
    <div className="bg-white border border-gray-300 p-6">
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
          {tasks.map((task, index) => (
            <tr key={task.id} className="border-b border-gray-200">
              <td className="py-2 px-2 text-gray-600">{index + 1}</td>
              <td className={`py-2 px-2 ${getStatusStyle(task.status)}`}>{task.title}</td>
              <td className="py-2 px-2 text-gray-600 text-xs">{getStatusText(task.status)}</td>
              <td className="py-2 px-2 text-gray-600 text-xs">
                {task.startDate && task.endDate
                  ? `${formatDateWithDay(task.startDate)} ~ ${formatDateWithDay(task.endDate)}`
                  : task.startDate
                  ? formatDateWithDay(task.startDate)
                  : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
