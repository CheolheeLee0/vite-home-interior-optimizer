import type { Task } from '../types';

interface TimelineProps {
  tasks: Task[];
}

const getStatusText = (status: Task['status']) => {
  switch (status) {
    case 'completed':
      return '완료';
    case 'in_progress':
      return '진행중';
    case 'pending':
      return '대기';
  }
};

export default function Timeline({ tasks }: TimelineProps) {
  return (
    <div className="bg-white border border-gray-300 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">작업 타임라인</h2>

      <div className="space-y-6">
        {tasks.map((task, index) => (
          <div key={task.id} className="border-l-2 border-gray-400 pl-6 relative">
            {/* 타임라인 마커 */}
            <div className="absolute left-0 top-1 w-3 h-3 bg-gray-800 -translate-x-[7px]" />

            {/* 작업 제목 */}
            <div className="mb-2">
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-base font-bold text-gray-900">
                  {index + 1}. {task.title}
                </h3>
                <span className="text-xs text-gray-600">
                  [{getStatusText(task.status)}]
                </span>
              </div>
              {task.description && (
                <p className="text-sm text-gray-600">{task.description}</p>
              )}
            </div>

            {/* 일정 정보 */}
            <div className="text-xs text-gray-600 space-y-0.5 mb-2">
              {task.startDate && <div>시작일: {task.startDate.substring(5)}</div>}
              {task.endDate && <div>완료일: {task.endDate.substring(5)}</div>}
              {!task.startDate && !task.endDate && task.status === 'pending' && (
                <div>일정 미정</div>
              )}
            </div>

            {/* 비용 정보 */}
            {(task.estimatedCost || task.actualCost) && (
              <div className="text-xs text-gray-600">
                {task.estimatedCost && <span>예상: {task.estimatedCost.toLocaleString()}원</span>}
                {task.estimatedCost && task.actualCost && <span className="mx-2">|</span>}
                {task.actualCost && <span>실제: {task.actualCost.toLocaleString()}원</span>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
