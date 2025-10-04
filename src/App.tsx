function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">인테리어 작업 계획서</h1>
          <p className="text-gray-600 mt-2">대전 서구 내동 28-3 신일빌라 B동 401호</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* 작업 요약 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">작업 요약</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>철거 (18평)</li>
          </ul>
        </section>

        {/* 철거 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">1. 철거 (18평)</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>싱크대 철거</li>
            <li>몰딩 철거</li>
            <li>걸레받이 철거</li>
            <li>장판 철거</li>
            <li>청소 및 정리</li>
          </ul>
        </section>

        {/* 싱크대 교체 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">2. 싱크대 교체</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">국산 인조대리석 2.4M 싱크대</h3>
            <a
              href="https://smartstore.naver.com/ttkitchen/products/10069120391?nl-query=%EC%8B%B1%ED%81%AC%EB%8C%80&nl-au=e5eb6ef50eec4965b5e9964cc6f82573&NaPm=ci%3De5eb6ef50eec4965b5e9964cc6f82573%7Cct%3Dmgakojb7%7Ctr%3Dnslsl%7Csn%3D10558674%7Chk%3D14e9a501c0f1e33d19a0a3e12a248916679f072a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              제품 보기
            </a>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="text-gray-700">가스대 → 조리대로 변경하고</p>
            <p className="text-gray-700">빌트인 가스레인지 추가 필요 (LNG, LPG 결정 필요)</p>
          </div>
        </section>

        {/* 몰딩 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">3. 몰딩</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">PVC몰딩 천장몰딩 천정 문선 코너 계단 2단25 12Tx25x2400 나무무늬</h3>
            <a
              href="https://smartstore.naver.com/mouldingstory/products/2988357161?nl-query=%EC%B2%9C%EC%9E%A5%20%EB%AA%B0%EB%94%A9&nl-au=708054636baa42c5bed611f4b6f2432f&NaPm=ci%3D708054636baa42c5bed611f4b6f2432f%7Cct%3Dmgcgahec%7Ctr%3Dnslsl%7Csn%3D709998%7Chk%3Dcc53ad558bbd4549da88b89706d1b48b2f8bef4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              제품 보기
            </a>
          </div>
          <p className="text-gray-700 bg-gray-100 p-3 rounded">몰딩 거리 계산 실측 진행</p>
        </section>

        {/* 도배 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">4. 도배</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">만능풀바른벽지 실크 셀프도배 도배지 붙이는 접착식 모던뉴트럴 WP1006-1 140cm</h3>
            <a
              href="https://smartstore.naver.com/wallplan/products/344960685?nl-query=%EB%8F%84%EB%B0%B0&nl-au=8bc880ff7b2c4ed0955166188663d171&NaPm=ci%3D8bc880ff7b2c4ed0955166188663d171%7Cct%3Dmgcf2epn%7Ctr%3Dnslsl%7Csn%3D225072%7Chk%3D72ac6944843d7926c42ea8d57bf213a36d41f6c2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all mb-2 block"
            >
              제품 보기
            </a>
            <a
              href="https://www.youtube.com/watch?v=8VPdijy_ZDQ&t=235s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline block"
            >
              도배 설명 동영상 보기
            </a>
          </div>
          <p className="text-gray-700 bg-gray-100 p-3 rounded mb-4">도배 실측 진행</p>

          {/* 도배 이미지 갤러리 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <img src="/interior_images/image.png" alt="도배 샘플 1" className="w-full rounded-lg shadow-md" />
            <img src="/interior_images/image 1.png" alt="도배 샘플 2" className="w-full rounded-lg shadow-md" />
            <img src="/interior_images/image 2.png" alt="도배 샘플 3" className="w-full rounded-lg shadow-md" />
            <img src="/interior_images/image 3.png" alt="도배 샘플 4" className="w-full rounded-lg shadow-md" />
          </div>
        </section>

        {/* 장판 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">5. 장판</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">LX 모노륨 셀프 장판 시공 바닥장판 두꺼운 모노륨장판 20cm LX 우드 SS24133</h3>
            <a
              href="https://smartstore.naver.com/flowall/products/309492432?nl-query=%EC%9E%A5%ED%8C%90&nl-au=5180fc6e3d804daa91229ca0ed9e4068&NaPm=ci%3D5180fc6e3d804daa91229ca0ed9e4068%7Cct%3Dmgcaj1a4%7Ctr%3Dnslsl%7Csn%3D236952%7Chk%3D8e271e716e554cc929ec181ec0f5c5b4f6bba462"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline break-all"
            >
              제품 보기
            </a>
          </div>
          <p className="text-gray-700 bg-gray-100 p-3 rounded mb-4">신일빌라 장판 실측 진행</p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="text-gray-700 font-semibold">성남 화학 / 하우스풀 / 라이트우드 S18163 제품</p>
          </div>
          <img src="/interior_images/image 4.png" alt="장판 샘플" className="max-w-md rounded-lg shadow-md" />
        </section>

        {/* 걸레받이 */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">6. 걸레받이</h2>
          <p className="text-gray-700 bg-gray-100 p-3 rounded">걸레받이 실측 진행</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>인테리어 작업 계획서</p>
        </div>
      </footer>
    </div>
  )
}

export default App
