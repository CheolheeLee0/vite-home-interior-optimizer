import { useState, useEffect } from 'react';
import { projectData } from './data/projectData';
import ProgressTracker from './components/ProgressTracker';
import CostSummary from './components/CostSummary';
import TaskCard from './components/TaskCard';
import Calendar from './components/Calendar';
import OptimizationReport from './components/OptimizationReport';

const PASSWORD = '13567895';
const STORAGE_KEY = 'interior-password-auth';

function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'cost' | 'optimization'>('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  // 컴포넌트 마운트 시 인증 상태 로드
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === PASSWORD) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Failed to load auth status:', error);
    }
  }, []);

  // 비밀번호 확인
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem(STORAGE_KEY, PASSWORD);
      setPasswordInput('');
      setShowPasswordInput(false);
    } else {
      alert('비밀번호가 올바르지 않습니다.');
      setPasswordInput('');
    }
  };

  // 로그아웃
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(STORAGE_KEY);
    setActiveTab('overview');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

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
                      {projectData.buildingInfo.buildYear.split('.')[0]}년 ({projectData.buildingInfo.buildAge}년차) · {' '}
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
                {projectData.videoUrl && (
                  <div className="pt-2">
                    <a
                      href={projectData.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-800 underline"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      집 전체 상황 영상 보기
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="text-left md:text-right">
              <div className="text-xs text-gray-500 mb-2">
                업데이트: {currentDate}
              </div>
              {/* 비밀번호 인증 UI */}
              <div className="flex items-center gap-2 justify-start md:justify-end">
                {!isAuthenticated ? (
                  showPasswordInput ? (
                    <form onSubmit={handlePasswordSubmit} className="flex items-center gap-2">
                      <input
                        type="password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="비밀번호"
                        className="px-2 py-1 text-xs border border-gray-300 focus:outline-none focus:border-gray-900"
                        autoFocus
                      />
                      <button
                        type="submit"
                        className="px-2 py-1 text-xs bg-gray-900 text-white hover:bg-gray-700"
                      >
                        확인
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setShowPasswordInput(false);
                          setPasswordInput('');
                        }}
                        className="px-2 py-1 text-xs border border-gray-300 hover:bg-gray-100"
                      >
                        취소
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => setShowPasswordInput(true)}
                      className="px-3 py-1 text-xs border border-gray-400 text-gray-700 hover:bg-gray-100"
                    >
                      🔒 비용 정보 보기
                    </button>
                  )
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-green-700">✓ 비용 정보 인증됨</span>
                    <button
                      onClick={handleLogout}
                      className="px-2 py-1 text-xs border border-gray-300 text-gray-600 hover:bg-gray-100"
                    >
                      로그아웃
                    </button>
                  </div>
                )}
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
              인테리어 전체 과정
            </button>
            {isAuthenticated && (
              <>
                <button
                  onClick={() => setActiveTab('cost')}
                  className={`px-3 md:px-4 py-2 text-xs md:text-sm border-b-2 whitespace-nowrap ${
                    activeTab === 'cost'
                      ? 'border-gray-900 text-gray-900 font-medium'
                      : 'border-transparent text-gray-600'
                  }`}
                >
                  비용
                </button>
                <button
                  onClick={() => setActiveTab('optimization')}
                  className={`px-3 md:px-4 py-2 text-xs md:text-sm border-b-2 whitespace-nowrap ${
                    activeTab === 'optimization'
                      ? 'border-gray-900 text-gray-900 font-medium'
                      : 'border-transparent text-gray-600'
                  }`}
                >
                  비용 최적화 가이드
                </button>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* 개요 탭 */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* 진행상황 */}
            <ProgressTracker tasks={projectData.tasks} />

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
                  <TaskCard key={task.id} task={task} index={index + 1} showCost={isAuthenticated} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 비용 탭 */}
        {activeTab === 'cost' && (
          <div className="space-y-6">
            <CostSummary tasks={projectData.tasks} totalBudget={projectData.totalBudget} />
          </div>
        )}

        {/* 비용 최적화 가이드 탭 */}
        {activeTab === 'optimization' && (
          <OptimizationReport tasks={projectData.tasks} totalBudget={projectData.totalBudget} />
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
