import type { Project } from '../types';

export const projectData: Project = {
  id: 'shinil-villa-b401',
  name: '내동 신일빌라 인테리어',
  address: '대전 서구 내동 28-3',
  roadAddress: '대전시 서구 동서대로1022번길 6',
  fullAddress: '대전시 서구 동서대로1022번길 6, 내동 신일빌라 B동 401호',
  size: '18평',
  totalBudget: 3000000,
  videoUrl: 'https://youtu.be/62_1ezUriws?si=qMne7p1thvDNy94k',
  buildingInfo: {
    buildingType: '다세대',
    totalUnits: 19,
    buildYear: '1991. 4.',
    buildAge: 35,
    parking: '0대 (세대당 0대)',
    naverLink: 'https://fin.land.naver.com/complexes/villa/674250'
  },
  tasks: [
    {
      id: 'preparation',
      title: '사전 준비 작업',
      description: '신일빌라 현장 방문 - 실측 및 자재 구매 준비',
      status: 'pending',
      subtasks: [
        '신일빌라 현장 방문',
        '철거 상세 요구사항 정리 (싱크대, 천장몰딩, 걸레받이, 장판)',
        '전체 도면 작성',
        '도배 가로/세로 길이 실측',
        '장판 가로/세로 길이 실측',
        'LNG/LPG 확인 및 빌트인 가스레인지 선택',
        '세면대 - 하수구 배수 선 연결 확인, 배수구 연결된 모델 구매',
        '싱크대 자재 구매',
        '싱크대 수전 구매',
        '천장 몰딩 자재 구매 (ㅈㅈㅊ사장님 논의)',
        '걸레받이 자재 구매 (ㅈㅈㅊ사장님 논의)',
        '싱크대 설치 시공업자 구인',
        '도배 시공업자 구인',
        '장판 시공업자 구인'
      ],
      startDate: '2025-10-05',
      endDate: '2025-10-05',
      notes: [
        '⚡ 최우선 작업 - 모든 후속 작업의 기반',
        '⚠️ 실측 정확도가 자재 구매 및 시공 품질을 결정',
        '⚠️ LNG/LPG 확인 실패시 가스레인지 재구매 위험',
        '⚠️ ㅈㅈㅊ사장님 사전 논의 필수 (몰딩/걸레받이 자재 호환성)'
      ]
    },
    {
      id: 'bathroom',
      title: '욕실 시공',
      description: '변기, 세면대, 수전, 악세사리 설치 (ㅅㅁㅌㅈㅅㅅㅇ사장님)',
      status: 'completed',
      subtasks: [
        '변기 설치',
        '세면대 설치',
        '수전 설치',
        '악세사리 설치'
      ],
      estimatedCost: 783150,
      actualCost: 783150,
      estimatedMaterialCost: 383150,
      actualMaterialCost: 383150,
      estimatedLaborCost: 400000,
      actualLaborCost: 400000,
      materials: [
        {
          name: '욕실 자재 일체',
          price: 383150,
          unit: '식'
        }
      ],
      startDate: '2025-10-03',
      endDate: '2025-10-03',
      notes: ['시공: ㅅㅁㅌㅈㅅㅅㅇ사장님']
    },
    {
      id: 'demolition',
      title: '철거',
      description: '기존 자재 철거 및 청소 (ㅈㅈㅊ사장님)',
      status: 'in_progress',
      subtasks: [
        '싱크대 철거',
        '몰딩 철거',
        '걸레받이 철거',
        '장판 철거',
        '휴지걸이 위 타올걸이 악세사리 제거',
        '청소 및 정리'
      ],
      estimatedCost: 450000,
      actualCost: 450000,
      estimatedLaborCost: 450000,
      actualLaborCost: 450000,
      startDate: '2025-10-07',
      endDate: '2025-10-09',
      notes: ['시공: ㅈㅈㅊ사장님', '📝 상세 요구사항 정리: 10/5']
    },
    {
      id: 'sink',
      title: '싱크대 설치',
      description: '국산 인조대리석 싱크대 설치',
      status: 'pending',
      materials: [
        {
          name: '국산 인조대리석 2.4M 싱크대 (튼튼 씽크대)',
          url: 'https://smartstore.naver.com/ttkitchen/products/10069120391',
          price: 1323600,
          quantity: 1,
          unit: '세트',
          supplier: '네이버 스마트스토어 - 튼튼 씽크대 주방가구',
          note: '배송비 착불 75,000원 별도'
        }
      ],
      estimatedCost: 1600000,
      estimatedMaterialCost: 1500000,
      estimatedLaborCost: 100000,
      subtasks: [
        '배송 도착 확인',
        '4층으로 자재 옮기기',
        '싱크대 하부장 설치 (2.4m 화이트)',
        '싱크대 상부장 설치 (600mm 3개)',
        '후드장 및 슬라이드후드 설치',
        '키큰장(렌지수납장) 설치',
        '뒷선판 및 액세서리 설치',
        '싱크볼 설치 (LDSC850)',
        '수전 교체',
        '설치 완료 확인'
      ],
      startDate: '2025-10-14',
      endDate: '2025-10-15',
      notes: [
        '📌 네이버쇼핑 자재 구매 전 단계',
        '👷 시공업자 구인 전 단계',
        '인조대리석: 아티스',
        '도어: 유광 화이트',
        '손잡이: 화이트',
        '상품금액: 1,323,600원',
        '배송비: 착불 75,000원',
        '빌트인 가스레인지 추가 예정',
        '시공비(추정): 100,000원',
        '자재 주문: 10/5, 배송: 10/14'
      ]
    },
    {
      id: 'molding',
      title: '천장 몰딩 설치',
      description: 'PVC 천장몰딩 설치 (ㅈㅈㅊ사장님)',
      status: 'pending',
      materials: [
        {
          name: 'PVC몰딩 천장몰딩 천정 문선 코너 계단 2단25 12Tx25x2400 나무무늬',
          url: 'https://smartstore.naver.com/mouldingstory/products/2988357161',
          supplier: '네이버 스마트스토어 - mouldingstory'
        }
      ],
      estimatedLaborCost: 100000,
      startDate: '2025-10-16',
      endDate: '2025-10-16',
      notes: ['📌 네이버쇼핑 자재 구매 전 단계', '자재비 계산 중', '시공비: 100,000원', '시공: ㅈㅈㅊ사장님', '자재 주문: 10/5']
    },
    {
      id: 'wallpaper',
      title: '도배',
      description: '만능풀바른벽지 셀프 도배',
      status: 'pending',
      materials: [
        {
          name: '만능풀바른벽지 실크 셀프도배 도배지 붙이는 접착식 모던뉴트럴 WP1006-1 140cm',
          url: 'https://smartstore.naver.com/wallplan/products/344960685',
          supplier: '네이버 스마트스토어 - wallplan'
        }
      ],
      videoUrl: 'https://www.youtube.com/watch?v=8VPdijy_ZDQ&t=235s',
      images: [
        '/interior_images/image.png',
        '/interior_images/image 1.png',
        '/interior_images/image 2.png',
        '/interior_images/image 3.png'
      ],
      startDate: '2025-10-17',
      endDate: '2025-10-19',
      notes: ['👷 시공업자 구인 전 단계', '📏 도배 실측: 10/5', '자재 주문: 10/12', '셀프 시공']
    },
    {
      id: 'flooring',
      title: '장판',
      description: 'LX 모노륨 장판 시공',
      status: 'pending',
      materials: [
        {
          name: 'LX 모노륨 셀프 장판 시공 바닥장판 두꺼운 모노륨장판 20cm LX 우드 SS24133',
          url: 'https://smartstore.naver.com/flowall/products/309492432',
          supplier: '네이버 스마트스토어 - flowall'
        },
        {
          name: '성남 화학 / 하우스풀 / 라이트우드 S18163',
          note: '대체 제품'
        }
      ],
      images: ['/interior_images/image 4.png'],
      startDate: '2025-10-21',
      endDate: '2025-10-22',
      notes: ['👷 시공업자 구인 전 단계', '📏 장판 실측: 10/5', '자재 주문: 10/14', '셀프 시공']
    },
    {
      id: 'baseboard',
      title: '걸레받이 설치',
      description: '걸레받이 설치 (ㅈㅈㅊ사장님)',
      status: 'pending',
      estimatedLaborCost: 100000,
      startDate: '2025-10-23',
      endDate: '2025-10-23',
      notes: ['📌 네이버쇼핑 자재 구매 전 단계', '자재비 계산 중', '시공비: 100,000원', '시공: ㅈㅈㅊ사장님', '자재 주문: 10/5']
    },
    {
      id: 'cleaning',
      title: '입주청소',
      description: '전체 청소 및 마무리',
      status: 'pending',
      estimatedLaborCost: 150000,
      startDate: '2025-10-24',
      endDate: '2025-10-24',
      notes: ['청소업체 예약 필요']
    }
  ]
};
