import { useState, useEffect } from 'react';
import type { Task, TaskStatus } from '../types';

interface TaskCardProps {
  task: Task;
  index: number;
  showCost?: boolean;
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

const getDayOfWeek = (dateString: string) => {
  const date = new Date(dateString);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  return days[date.getDay()];
};

const formatDateWithDay = (dateString: string) => {
  const monthDay = dateString.substring(5);
  return `${monthDay}(${getDayOfWeek(dateString)})`;
};

// 로컬스토리지 키
const STORAGE_KEY = 'interior-subtasks-status';

// 로컬스토리지에서 완료된 subtask 상태 가져오기
const getCompletedSubtasks = (taskId: string): number[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      return data[taskId] || [];
    }
  } catch (error) {
    console.error('Failed to load subtask status:', error);
  }
  return [];
};

// 로컬스토리지에 완료된 subtask 상태 저장
const saveCompletedSubtasks = (taskId: string, completedIndexes: number[]) => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const data = stored ? JSON.parse(stored) : {};
    data[taskId] = completedIndexes;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save subtask status:', error);
  }
};

export default function TaskCard({ task, index, showCost = false }: TaskCardProps) {
  const [completedSubtasks, setCompletedSubtasks] = useState<number[]>([]);

  // 컴포넌트 마운트 시 로컬스토리지에서 상태 로드
  useEffect(() => {
    setCompletedSubtasks(getCompletedSubtasks(task.id));
  }, [task.id]);

  // 체크박스 토글 핸들러
  const handleToggleSubtask = (subtaskIndex: number) => {
    const newCompleted = completedSubtasks.includes(subtaskIndex)
      ? completedSubtasks.filter(i => i !== subtaskIndex)
      : [...completedSubtasks, subtaskIndex];

    setCompletedSubtasks(newCompleted);
    saveCompletedSubtasks(task.id, newCompleted);
  };

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
            <ul className="space-y-2 text-sm">
              {task.subtasks.map((subtask, i) => (
                <li key={i} className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id={`${task.id}-subtask-${i}`}
                    checked={completedSubtasks.includes(i)}
                    onChange={() => handleToggleSubtask(i)}
                    className="mt-0.5 w-4 h-4 cursor-pointer accent-gray-900"
                  />
                  <label
                    htmlFor={`${task.id}-subtask-${i}`}
                    className={`cursor-pointer flex-1 ${
                      completedSubtasks.includes(i)
                        ? 'text-gray-400 line-through'
                        : 'text-gray-700'
                    }`}
                  >
                    {subtask}
                  </label>
                </li>
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
                      className="inline-block mt-2 text-xs text-blue-600 underline hover:text-blue-800"
                    >
                      제품 링크
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 싱크대 배치도 (싱크대 작업에만 표시) */}
        {task.id === 'sink' && (
          <div className="border border-gray-300 p-4">
            {/* 배치도 */}
            <h4 className="text-sm font-semibold text-gray-900 mb-3">1. 배치도</h4>

            {/* Main Layout Grid */}
            <div className="mb-3">
              <div className="flex gap-0">
                {/* 키큰장 */}
                <div className="border-2 border-gray-800 w-24 flex items-center justify-center" style={{height: '252px'}}>
                  <div className="text-center px-1">
                    <div className="text-gray-800 font-semibold text-xs mb-1">키큰장</div>
                    <div className="text-gray-800 font-semibold text-xs mb-1">(렌지수납장)</div>
                    <div className="text-xs text-gray-500">262,000원</div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex-1">
                  {/* 상부장 Row */}
                  <div className="grid grid-cols-4 gap-0 mb-9">
                    <div className="border-2 border-gray-800 border-l-0 h-24 flex items-center justify-center">
                      <div className="text-center px-1">
                        <div className="text-gray-800 font-semibold text-xs">상부장 600</div>
                        <div className="text-xs text-gray-500 mt-1">75,800원</div>
                      </div>
                    </div>
                    <div className="border-2 border-gray-800 border-l-0 h-24 flex items-center justify-center">
                      <div className="text-center px-1">
                        <div className="text-gray-800 font-semibold text-xs">상부장 600</div>
                        <div className="text-xs text-gray-500 mt-1">75,800원</div>
                      </div>
                    </div>
                    <div className="border-2 border-gray-800 border-l-0 h-24 flex items-center justify-center">
                      <div className="text-center px-1">
                        <div className="text-gray-800 font-semibold text-xs">상부장 600</div>
                        <div className="text-xs text-gray-500 mt-1">75,800원</div>
                      </div>
                    </div>
                    <div className="border-2 border-gray-800 border-l-0 h-24 flex items-center justify-center">
                      <div className="text-center px-1">
                        <div className="text-gray-800 font-semibold text-xs">후드장 600+</div>
                        <div className="text-gray-800 font-semibold text-xs">슬라이드후드</div>
                        <div className="text-xs text-gray-500 mt-1">125,800원</div>
                      </div>
                    </div>
                  </div>

                  {/* 하부장 Row */}
                  <div>
                    <div className="grid grid-cols-12 gap-0">
                      <div className="col-span-3 border-2 border-gray-800 border-l-0 h-32 flex items-center justify-center">
                        <div className="text-center px-1">
                          <div className="text-gray-800 font-semibold text-xs mb-1">조리대 600</div>
                          <div className="text-xs text-gray-500">(117,800원)</div>
                        </div>
                      </div>
                      <div className="col-span-6 border-2 border-gray-800 border-l-0 h-32 flex items-center justify-center">
                        <div className="text-center px-1">
                          <div className="text-gray-800 font-semibold text-xs mb-1">개수대1200서랍</div>
                          <div className="text-gray-800 font-semibold text-xs mb-1">(우서랍,중앙볼)</div>
                          <div className="text-xs text-gray-500 mb-1">(237,800원)</div>
                          <div className="text-gray-800 text-xs mb-1">‣ 싱크볼: LDSC850</div>
                          <div className="text-xs text-gray-500">(68,000원)</div>
                        </div>
                      </div>
                      <div className="col-span-3 border-2 border-gray-800 border-l-0 h-32 flex items-center justify-center">
                        <div className="text-center px-1">
                          <div className="text-gray-800 font-semibold text-xs mb-1">조리대 600</div>
                          <div className="text-gray-800 text-xs mb-1">가스3구</div>
                          <div className="text-gray-800 text-xs mb-1">(hsgc-e330/lng도시가스)</div>
                          <div className="text-xs text-gray-500">(117,800원 + 148,000원)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 제품구성 Title */}
            <div className="my-4">
              <h4 className="text-sm font-semibold text-center text-gray-900 border-t-2 border-b-2 border-gray-800 py-2">
                제품구성
              </h4>
            </div>

            {/* 제품구성 Table */}
            <div className="border-2 border-gray-800 mb-4">
              {/* Row 1: 가구/상판 */}
              <div className="grid grid-cols-4 border-b-2 border-gray-800">
                <div className="col-span-1 bg-gray-300 p-3 flex items-center justify-center font-semibold text-gray-800 text-xs">
                  가구/상판
                </div>
                <div className="col-span-3 p-3 text-xs text-gray-700">
                  <span className="font-semibold">가구</span> 키큰장(렌지수납장), 조리대600, 개수대1200서랍(우서랍, 중앙볼), 조리대600, 걸레받이2400, 측면걸레받이x2, 걸레받이600(키큰장전용)
                  <span className="font-semibold ml-2">인조대리석 색상</span> 아티스
                  <span className="font-semibold ml-2">장(몸통) 색상</span> 화이트
                  <span className="font-semibold ml-2">손잡이 색상</span> 화이트
                </div>
              </div>

              {/* Row 2: 추가상품 */}
              <div className="grid grid-cols-4">
                <div className="col-span-1 bg-gray-300 p-3 flex items-center justify-center font-semibold text-gray-800 text-xs">
                  추가상품
                </div>
                <div className="col-span-3 p-3 text-xs text-gray-700">
                  <span className="font-semibold">싱크볼</span> LDSC850 <span className="text-xs text-gray-500">(68,000원)</span>
                  <span className="font-semibold ml-2">수전</span> 미선택
                  <span className="font-semibold ml-2">칼꽂이</span> <span className="text-xs text-gray-500">(5,000원)</span>
                  <span className="font-semibold ml-2">뒷선반</span> 2400 <span className="text-xs text-gray-500">(48,000원)</span>
                  <span className="font-semibold ml-2">가스3구</span> hsgc-e330/lng도시가스 <span className="text-xs text-gray-500">(148,000원)</span>
                  <span className="font-semibold ml-2">걸레받이</span> 2400mm <span className="text-xs text-gray-500">(27,000원)</span>
                  <span className="font-semibold ml-2">걸레받이</span> 600mm <span className="text-xs text-gray-500">(9,000원)</span>
                  <span className="font-semibold ml-2">측면걸레받이</span> <span className="text-xs text-gray-500">(5,000원)</span>
                  <span className="font-semibold ml-2">그릇망</span> wbl-290 <span className="text-xs text-gray-500">(9,000원)</span>
                </div>
              </div>
            </div>

            {/* Total Price */}
            <div className="bg-blue-50 border-2 border-blue-300 p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-800">총 상품 금액</span>
                <div className="text-right">
                  <div className="text-xs text-gray-600">총 수량 16개</div>
                  <div className="text-lg font-bold text-blue-600">1,407,600원</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 비용 정보 */}
        {showCost && (task.estimatedMaterialCost || task.actualMaterialCost || task.estimatedLaborCost || task.actualLaborCost) && (
          <div className="border-t border-gray-300 pt-3">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">비용</h4>
            <div className="space-y-3">
              {/* 자재비 */}
              {(task.estimatedMaterialCost || task.actualMaterialCost) && (
                <div>
                  <div className="text-xs text-gray-600 mb-1">자재비</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {task.estimatedMaterialCost ? (
                      <div>
                        <div className="text-xs text-gray-500">예상</div>
                        <div className="font-medium text-gray-900">{task.estimatedMaterialCost.toLocaleString()}원</div>
                      </div>
                    ) : <div></div>}
                    {task.actualMaterialCost ? (
                      <div>
                        <div className="text-xs text-gray-500">실제</div>
                        <div className="font-medium text-gray-900">{task.actualMaterialCost.toLocaleString()}원</div>
                      </div>
                    ) : <div></div>}
                  </div>
                </div>
              )}
              {/* 시공비 */}
              {(task.estimatedLaborCost || task.actualLaborCost) && (
                <div>
                  <div className="text-xs text-gray-600 mb-1">시공비</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {task.estimatedLaborCost ? (
                      <div>
                        <div className="text-xs text-gray-500">예상</div>
                        <div className="font-medium text-gray-900">{task.estimatedLaborCost.toLocaleString()}원</div>
                      </div>
                    ) : <div></div>}
                    {task.actualLaborCost ? (
                      <div>
                        <div className="text-xs text-gray-500">실제</div>
                        <div className="font-medium text-gray-900">{task.actualLaborCost.toLocaleString()}원</div>
                      </div>
                    ) : <div></div>}
                  </div>
                </div>
              )}
              {/* 합계 */}
              {(task.estimatedCost || task.actualCost) && (
                <div className="pt-2 border-t border-gray-200">
                  <div className="text-xs text-gray-600 mb-1">합계</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {task.estimatedCost ? (
                      <div>
                        <div className="text-xs text-gray-500">예상</div>
                        <div className="font-bold text-gray-900">{task.estimatedCost.toLocaleString()}원</div>
                      </div>
                    ) : <div></div>}
                    {task.actualCost ? (
                      <div>
                        <div className="text-xs text-gray-500">실제</div>
                        <div className="font-bold text-gray-900">{task.actualCost.toLocaleString()}원</div>
                      </div>
                    ) : <div></div>}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 일정 */}
        {(task.startDate || task.endDate) && (
          <div className="text-xs text-gray-600">
            {task.startDate && <div>시작일: {formatDateWithDay(task.startDate)}</div>}
            {task.endDate && <div>완료일: {formatDateWithDay(task.endDate)}</div>}
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
              className="inline-block text-xs text-red-600 underline hover:text-red-800"
            >
              참고 영상 보기
            </a>
          </div>
        )}

        {/* 이미지 갤러리 */}
        {task.images && task.images.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">참고사진</h4>
            <div className="grid grid-cols-2 gap-2">
              {task.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`${task.title} 사진 ${i + 1}`}
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
