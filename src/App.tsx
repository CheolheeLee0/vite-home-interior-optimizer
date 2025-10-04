import { useState } from 'react';
import { projectData } from './data/projectData';
import ProgressTracker from './components/ProgressTracker';
import CostSummary from './components/CostSummary';
import Timeline from './components/Timeline';
import TaskCard from './components/TaskCard';
import PhotoGallery from './components/PhotoGallery';
import Calendar from './components/Calendar';

function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'timeline' | 'gallery'>('overview');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // 모든 이미지 수집
  const allImages = projectData.tasks
    .flatMap(task => task.images || [])
    .filter(img => img);

  // 현재 한국 시간
  const currentDate = new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                {projectData.name}
              </h1>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-start gap-2">
                  <span className="text-xs text-gray-500 w-12 flex-shrink-0 pt-0.5">전체주소</span>
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-sm text-gray-600">
                      {projectData.fullAddress || projectData.address}
                    </p>
                    <button
                      onClick={() => copyToClipboard(projectData.fullAddress || projectData.address)}
                      className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                      title="주소 복사"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs text-gray-500 w-12 flex-shrink-0 pt-0.5">면적</span>
                  <p className="text-sm text-gray-600">{projectData.size}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs text-gray-500 w-12 flex-shrink-0 pt-0.5">연락처</span>
                  <div className="flex items-center gap-2 flex-1">
                    <p className="text-sm text-gray-900 font-medium">
                      010-3919-0167
                    </p>
                    <button
                      onClick={() => copyToClipboard('010-3919-0167')}
                      className="text-gray-400 hover:text-gray-600 flex-shrink-0"
                      title="전화번호 복사"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xs text-gray-500 w-12 flex-shrink-0 pt-0.5">비밀번호</span>
                  <p className="text-sm text-gray-600">위 연락처에 문의</p>
                </div>
                {projectData.buildingInfo && (
                  <div className="pt-1 border-t border-gray-200">
                    <p className="text-xs md:text-sm text-gray-600">
                      {projectData.buildingInfo.buildingType} · {projectData.buildingInfo.totalUnits}세대 · {projectData.buildingInfo.buildYear} ({projectData.buildingInfo.buildAge}년차) · {' '}
                      {projectData.buildingInfo.naverLink && (
                        <a
                          href={projectData.buildingInfo.naverLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          네이버 부동산 링크
                        </a>
                      )}
                    </p>
                  </div>
                )}
                <p className="text-xs md:text-sm text-gray-700 pt-1">
                  35년 된 구축 빌라를 최적 비용으로 보수하여 세입자에게 만족스러운 거주경험을 제공하기 위한 프로젝트입니다.
                </p>
              </div>
            </div>
            <div className="text-left md:text-right">
              <div className="text-xs text-gray-500">
                업데이트: {currentDate}
              </div>
            </div>
          </div>

          {/* 탭 네비게이션 */}
          <nav className="mt-4 flex gap-0 border-b border-gray-300 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm border-b-2 whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-gray-900 text-gray-900 font-medium'
                  : 'border-transparent text-gray-600'
              }`}
            >
              개요
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm border-b-2 whitespace-nowrap ${
                activeTab === 'tasks'
                  ? 'border-gray-900 text-gray-900 font-medium'
                  : 'border-transparent text-gray-600'
              }`}
            >
              작업 상세
            </button>
            <button
              onClick={() => setActiveTab('timeline')}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm border-b-2 whitespace-nowrap ${
                activeTab === 'timeline'
                  ? 'border-gray-900 text-gray-900 font-medium'
                  : 'border-transparent text-gray-600'
              }`}
            >
              타임라인
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm border-b-2 whitespace-nowrap ${
                activeTab === 'gallery'
                  ? 'border-gray-900 text-gray-900 font-medium'
                  : 'border-transparent text-gray-600'
              }`}
            >
              사진
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* 개요 탭 */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* 진행상황 & 비용 그리드 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ProgressTracker tasks={projectData.tasks} />
              <CostSummary tasks={projectData.tasks} totalBudget={projectData.totalBudget} />
            </div>

            {/* 달력 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">작업 일정</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Calendar tasks={projectData.tasks} year={2025} month={10} />
                <Calendar tasks={projectData.tasks} year={2025} month={11} />
              </div>
            </div>

            {/* 작업 카드 그리드 */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">작업 목록</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projectData.tasks.map((task, index) => (
                  <TaskCard key={task.id} task={task} index={index + 1} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 작업 상세 탭 */}
        {activeTab === 'tasks' && (
          <div className="space-y-6">
            {projectData.tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index + 1} />
            ))}
          </div>
        )}

        {/* 타임라인 탭 */}
        {activeTab === 'timeline' && (
          <Timeline tasks={projectData.tasks} />
        )}

        {/* 갤러리 탭 */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            {projectData.tasks
              .filter(task => task.images && task.images.length > 0)
              .map(task => (
                <PhotoGallery
                  key={task.id}
                  images={task.images || []}
                  title={`${task.title} - 작업 사진`}
                />
              ))}
            {allImages.length === 0 && (
              <div className="bg-white border border-gray-300 p-6 text-center text-gray-600">
                등록된 사진이 없습니다.
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p>{projectData.name}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
