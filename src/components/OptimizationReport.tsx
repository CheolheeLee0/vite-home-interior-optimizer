import type { Task } from '../types';

interface OptimizationReportProps {
  tasks: Task[];
  totalBudget?: number;
}

interface WorkTip {
  task: string;
  cautions: string[];
  recommendations: string[];
  costSavings: string[];
}

export default function OptimizationReport({ tasks, totalBudget }: OptimizationReportProps) {
  // 작업별 팁과 주의사항
  const workTips: WorkTip[] = [
    {
      task: '사전 준비 작업',
      cautions: [
        '실측 오차는 자재 구매 실패로 직결됩니다 (반품/교환 비용 발생)',
        'LNG/LPG 미확인시 가스레인지 재구매 위험',
        '철거 상세 요구사항 누락시 재작업 비용 발생',
        '시공업자 구인 지연시 전체 일정 차질'
      ],
      recommendations: [
        '실측시 줄자 2개로 교차 확인 (오차 최소화)',
        '사진/동영상 촬영으로 현장 상황 기록',
        '도면은 A4 용지에 수기 작성 후 스캔 보관',
        '자재 주문 전 배송 기간 2주 여유 확보',
        '시공업자는 2-3명 견적 비교 후 선택'
      ],
      costSavings: [
        '네이버 스마트스토어 가격 비교 (10-20% 절감)',
        '자재 일괄 구매시 배송비 통합 (배송비 50% 절감)',
        '지인 소개 시공업자 활용 (시공비 10-15% 절감)',
        '셀프 시공 가능 항목 파악 (도배, 장판)'
      ]
    },
    {
      task: '욕실 시공',
      cautions: [
        '배수 라인 연결 오류시 누수 위험',
        '세면대 하수구 배수 선 연결 확인 필수',
        '변기 설치 불량시 악취 및 누수 발생',
        '수전 연결 불량시 수압 저하 또는 누수'
      ],
      recommendations: [
        '시공 후 24시간 물 흘려보며 누수 테스트',
        '욕실 자재는 일체형 패키지 구매 (호환성 보장)',
        '배수구 연결된 세면대 모델 선택 (추가 작업 불필요)',
        '변기 설치 후 흔들림 여부 필수 확인'
      ],
      costSavings: [
        '욕실 자재 패키지 구매로 10-15% 절감',
        '배수 연결형 세면대로 배관 작업비 절감',
        '중저가 브랜드 선택시 30-40% 절감 가능'
      ]
    },
    {
      task: '철거',
      cautions: [
        '철거시 벽체 손상 주의 (보수 비용 추가)',
        '배관/전선 손상 위험 (전문가 확인 필수)',
        '폐기물 처리비 별도 확인',
        '타올걸이 등 악세사리 철거시 타일 손상 주의'
      ],
      recommendations: [
        '철거 전 사진 촬영 (원상복구 참고용)',
        '재사용 가능한 부품 분리 보관',
        '철거 범위를 명확히 표시 (마스킹 테이프)',
        '청소 시간 충분히 확보 (1일 추가)'
      ],
      costSavings: [
        '재사용 가능 자재 분리 (손잡이, 경첩 등)',
        '폐기물 처리는 구청 대형폐기물 신청 활용',
        '철거와 청소 동시 진행으로 인건비 절감'
      ]
    },
    {
      task: '싱크대 설치',
      cautions: [
        '4층 계단 운반시 자재 손상 위험',
        '수전 호환성 미확인시 재구매 필요',
        '가스레인지 크기 미확인시 설치 불가',
        '싱크볼 배수 연결 누수 위험'
      ],
      recommendations: [
        '배송 도착시 손상 여부 즉시 확인',
        '계단 운반은 2-3명 협업 (안전사고 예방)',
        '수전은 싱크대와 동시 설치 (재작업 방지)',
        '가스 연결은 전문가 시공 (안전 필수)',
        '설치 후 수압 테스트 및 누수 확인'
      ],
      costSavings: [
        '네이버 스마트스토어 구매로 20-30% 절감',
        '배송비 착불 협상 (일부 업체 무료 가능)',
        '설치 일부 셀프로 시공비 50% 절감',
        '수전은 일반 제품으로 30-40% 절감'
      ]
    },
    {
      task: '천장 몰딩 설치',
      cautions: [
        '길이 부족시 이음새 노출 (미관 저하)',
        '접착제 선택 오류시 탈락 위험',
        '모서리 각도 절단 실패시 재료 낭비',
        '천장 높이 차이로 인한 틈새 발생'
      ],
      recommendations: [
        '실측 길이 + 10% 여유분 구매',
        '모서리 컷팅은 마이터박스 활용',
        'PVC 몰딩은 실리콘 접착제 사용',
        '시공 전 천장 청소 및 탈지 필수',
        'ㅈㅈㅊ사장님과 자재 호환성 사전 논의'
      ],
      costSavings: [
        'PVC 몰딩은 목재 대비 50-60% 저렴',
        '네이버 스마트스토어 구매로 20-30% 절감',
        '직선 구간은 셀프 시공 가능 (시공비 40% 절감)'
      ]
    },
    {
      task: '도배',
      cautions: [
        '습도 높은 날 시공시 접착력 저하',
        '벽면 요철 미처리시 벽지 돌출',
        '패턴 매칭 실패시 이음새 노출',
        '풀 도포 불균일시 기포 발생'
      ],
      recommendations: [
        '만능풀바른벽지로 셀프 시공 가능',
        '시공 2일 전 실내 환기 및 청소',
        '벽면 퍼티 작업으로 평탄화',
        '패턴은 10-15cm 여유 두고 재단',
        '스퀴지로 기포 제거 (중앙→외곽)',
        '시공 후 24시간 환기 금지'
      ],
      costSavings: [
        '셀프 도배로 시공비 100% 절감 (인건비 30-50만원)',
        '만능풀바른벽지는 일반 벽지 대비 시공 쉬움',
        '유튜브 참고 영상 활용 (전문가 노하우)',
        '자재비만 투입으로 50-60% 절감'
      ]
    },
    {
      task: '장판',
      cautions: [
        '바닥 평탄화 미흡시 장판 돌출',
        '이음새 처리 불량시 들뜸 발생',
        '온돌 바닥 온도로 수축/팽창',
        '재단 오류시 재료 부족'
      ],
      recommendations: [
        'LX 모노륨 장판은 내구성 우수',
        '시공 3일 전 실내 보관 (온도 적응)',
        '바닥 청소 및 이물질 제거 필수',
        '벽면에서 5mm 여유 두고 재단',
        '이음새는 열풍기로 밀착',
        '시공 후 48시간 보양'
      ],
      costSavings: [
        '셀프 시공으로 시공비 100% 절감 (인건비 20-40만원)',
        '네이버 스마트스토어 구매로 20-30% 절감',
        'LX 모노륨 대체품으로 15-20% 절감 가능',
        '자재비만 투입으로 40-50% 절감'
      ]
    },
    {
      task: '걸레받이 설치',
      cautions: [
        '벽면 굴곡으로 틈새 발생',
        '접착제 부족시 탈락 위험',
        '모서리 각도 절단 실패',
        '장판과의 틈새 발생'
      ],
      recommendations: [
        '장판 시공 완료 후 설치',
        '걸레받이는 장판 위로 5mm 겹침',
        '실리콘 접착제로 고정',
        '모서리는 45도 각도 절단',
        'ㅈㅈㅊ사장님과 자재 사전 논의'
      ],
      costSavings: [
        'PVC 걸레받이로 30-40% 절감',
        '네이버 스마트스토어 구매로 20% 절감',
        '직선 구간 셀프 시공으로 시공비 40% 절감'
      ]
    },
    {
      task: '입주청소',
      cautions: [
        '시공 먼지 미제거시 입주 불쾌감',
        '화학 세제로 자재 손상 위험',
        '창문/새시 청소 누락'
      ],
      recommendations: [
        '전문 입주청소 업체 활용 권장',
        '청소 전 환기 24시간 실시',
        '순한 세제로 마감재 보호',
        '청소 후 왁스 코팅 (장판 보호)'
      ],
      costSavings: [
        '셀프 청소시 15만원 절감 가능',
        '다만 전문 업체 품질 차이 고려 필요',
        '청소 장비 대여로 5만원 추가 투입'
      ]
    }
  ];

  // 전체 비용 분석
  const totalEstimated = tasks.reduce((sum, task) => sum + (task.estimatedCost || 0), 0);
  const materialCost = tasks.reduce((sum, task) => sum + (task.estimatedMaterialCost || task.actualMaterialCost || 0), 0);
  const laborCost = tasks.reduce((sum, task) => sum + (task.estimatedLaborCost || task.actualLaborCost || 0), 0);

  return (
    <div className="space-y-6">
      {/* 개요 */}
      <div className="bg-white border border-gray-300 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
          비용 최적화 분석 리포트
        </h2>
        <div className="space-y-3">
          <p className="text-sm text-gray-700">
            본 리포트는 35년 된 구축 빌라 인테리어 프로젝트의 전 과정을 분석하여,
            작업별 주의사항과 자재비/시공비 최적화 방안을 제시합니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-3">
            <div className="border border-gray-200 p-3">
              <div className="text-xs text-gray-500 mb-1">총 예산</div>
              <div className="text-base font-bold text-gray-900">
                {totalBudget ? totalBudget.toLocaleString() : '-'}원
              </div>
            </div>
            <div className="border border-gray-200 p-3">
              <div className="text-xs text-gray-500 mb-1">예상 총 비용</div>
              <div className="text-base font-bold text-gray-900">
                {totalEstimated.toLocaleString()}원
              </div>
            </div>
            <div className="border border-gray-200 p-3">
              <div className="text-xs text-gray-500 mb-1">자재비</div>
              <div className="text-base font-bold text-blue-700">
                {materialCost.toLocaleString()}원
              </div>
            </div>
            <div className="border border-gray-200 p-3">
              <div className="text-xs text-gray-500 mb-1">시공비</div>
              <div className="text-base font-bold text-green-700">
                {laborCost.toLocaleString()}원
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 핵심 최적화 전략 */}
      <div className="bg-yellow-50 border-2 border-yellow-400 p-6">
        <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span>
          <span>핵심 비용 절감 전략</span>
        </h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <span className="font-bold text-yellow-700 flex-shrink-0">1.</span>
            <div>
              <span className="font-medium text-gray-900">셀프 시공 활용</span>
              <span className="text-gray-700"> - 도배, 장판 직접 시공시 시공비 70-90만원 절감 (23-30%)</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold text-yellow-700 flex-shrink-0">2.</span>
            <div>
              <span className="font-medium text-gray-900">네이버 스마트스토어 활용</span>
              <span className="text-gray-700"> - 자재 온라인 구매로 자재비 20-30% 절감 가능</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold text-yellow-700 flex-shrink-0">3.</span>
            <div>
              <span className="font-medium text-gray-900">자재 일괄 구매</span>
              <span className="text-gray-700"> - 배송비 통합으로 5-10만원 절감</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold text-yellow-700 flex-shrink-0">4.</span>
            <div>
              <span className="font-medium text-gray-900">시공업자 견적 비교</span>
              <span className="text-gray-700"> - 2-3명 견적 비교로 시공비 10-15% 절감</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-bold text-yellow-700 flex-shrink-0">5.</span>
            <div>
              <span className="font-medium text-gray-900">사전 준비 철저</span>
              <span className="text-gray-700"> - 실측 정확도로 자재 재구매 방지 (10-20만원 손실 방지)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 작업별 상세 가이드 */}
      <div className="bg-white border border-gray-300 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
          작업별 상세 가이드
        </h2>
        <div className="space-y-6">
          {workTips.map((tip, index) => (
            <div key={index} className="border border-gray-200 p-4">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                {index + 1}. {tip.task}
              </h3>

              {/* 주의사항 */}
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-red-700 mb-2 flex items-center gap-1">
                  <span>⚠️</span>
                  <span>주의사항</span>
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  {tip.cautions.map((caution, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 flex-shrink-0">•</span>
                      <span>{caution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 권장사항 */}
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-blue-700 mb-2 flex items-center gap-1">
                  <span>✅</span>
                  <span>권장사항</span>
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  {tip.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 flex-shrink-0">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 비용 절감 팁 */}
              <div>
                <h4 className="text-sm font-semibold text-green-700 mb-2 flex items-center gap-1">
                  <span>💰</span>
                  <span>비용 절감 팁</span>
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  {tip.costSavings.map((saving, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 flex-shrink-0">•</span>
                      <span>{saving}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 추가 최적화 방안 */}
      <div className="bg-white border border-gray-300 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
          추가 최적화 방안
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">일정 관리</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>자재 배송 지연 대비 2주 여유 확보</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>시공업자 일정 겹침 방지 (3일 간격 확보)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>날씨 영향 고려 (장마철 도배/장판 피하기)</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">품질 관리</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>시공 후 24-48시간 보양 기간 필수 확보</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>각 단계마다 사진/동영상 기록 (하자 발생시 증거)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>시공업자와 작업 범위 명확히 문서화</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">리스크 관리</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>예비비 10-15% 확보 (예상치 못한 추가 작업 대비)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>구축 빌라 특성상 배관/전선 노후 가능성 사전 점검</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>시공 중 발견되는 추가 보수 사항 즉시 협의</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 참고 자료 */}
      <div className="bg-gray-50 border border-gray-300 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300">
          유용한 참고 자료
        </h2>
        <div className="space-y-3 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">셀프 시공 가이드</h3>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>만능풀바른벽지 셀프 도배: 유튜브 "셀프 인테리어" 채널</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>LX 모노륨 장판 시공: 네이버 블로그 "셀프 인테리어" 검색</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">자재 구매처</h3>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>네이버 스마트스토어: 가격 비교 필수 (최소 3곳 이상)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>쿠팡/지마켓: 타임세일 활용시 10-20% 추가 절감</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">시공업자 구인</h3>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>당근마켓/네이버 카페: 지역 기반 시공업자 추천</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>지인 소개: 신뢰도 높고 가격 협상 가능</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
