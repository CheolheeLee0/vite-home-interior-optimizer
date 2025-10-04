import { Task, TaskStatus } from '../types';

interface TaskCardProps {
  task: Task;
  index: number;
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

export default function TaskCard({ task, index }: TaskCardProps) {
  return (
    <div className="bg-white border border-gray-300">
      {/* 헤더 */}
      <div className="border-b border-gray-300 p-4 bg-gray-50">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-bold text-gray-900">
            {index}. {task.title}
          </h3>
          <span className="text-xs text-gray-600 border border-gray-400 px-2 py-1">
            {getStatusText(task.status)}
          </span>
        </div>
        {task.description && (
          <p className="text-sm text-gray-600">{task.description}</p>
        )}
      </div>

      {/* 본문 */}
      <div className="p-4 space-y-4">
        {/* 세부 작업 */}
        {task.subtasks && task.subtasks.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">세부 작업</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              {task.subtasks.map((subtask, i) => (
                <li key={i} className="pl-4">- {subtask}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 자재 정보 */}
        {task.materials && task.materials.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">자재 정보</h4>
            <div className="space-y-3">
              {task.materials.map((material, i) => (
                <div key={i} className="border border-gray-300 p-3">
                  <div className="text-sm text-gray-900 mb-2">{material.name}</div>
                  <div className="text-xs text-gray-600 space-y-1">
                    {material.price && <div>가격: {material.price.toLocaleString()}원</div>}
                    {material.quantity && <div>수량: {material.quantity}{material.unit || '개'}</div>}
                    {material.supplier && <div>공급처: {material.supplier}</div>}
                    {material.note && <div className="text-gray-700 mt-2">※ {material.note}</div>}
                  </div>
                  {material.url && (
                    <a
                      href={material.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs text-gray-700 underline hover:text-gray-900"
                    >
                      제품 링크
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 비용 정보 */}
        {(task.estimatedCost || task.actualCost) && (
          <div className="border-t border-gray-300 pt-3">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">비용</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {task.estimatedCost && (
                <div>
                  <div className="text-xs text-gray-600">예상 비용</div>
                  <div className="font-medium text-gray-900">{task.estimatedCost.toLocaleString()}원</div>
                </div>
              )}
              {task.actualCost && (
                <div>
                  <div className="text-xs text-gray-600">실제 비용</div>
                  <div className="font-medium text-gray-900">{task.actualCost.toLocaleString()}원</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 일정 */}
        {(task.startDate || task.endDate) && (
          <div className="text-xs text-gray-600">
            {task.startDate && <div>시작일: {task.startDate}</div>}
            {task.endDate && <div>완료일: {task.endDate}</div>}
          </div>
        )}

        {/* 참고사항 */}
        {task.notes && task.notes.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">참고사항</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              {task.notes.map((note, i) => (
                <li key={i} className="pl-4">• {note}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 동영상 링크 */}
        {task.videoUrl && (
          <div>
            <a
              href={task.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs text-gray-700 underline hover:text-gray-900"
            >
              참고 영상 보기
            </a>
          </div>
        )}

        {/* 이미지 갤러리 */}
        {task.images && task.images.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">참고 이미지</h4>
            <div className="grid grid-cols-2 gap-2">
              {task.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`${task.title} 이미지 ${i + 1}`}
                  className="w-full border border-gray-300"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
