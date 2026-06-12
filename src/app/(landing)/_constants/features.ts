import type { Feature } from './types';

export const FEATURES = [
  {
    tag: '홈',
    title: '열자마자\n오늘의 질문과 지도',
    desc: '매일 하나의 질문이 기록 허들을 낮추고, 우리 팀이 다닌 곳은 지도 위 사진 핀으로 한눈에. 빈 화면 앞에서 고민할 필요 없이 바로 시작해요.',
    accent: 'var(--color-brand)',
    img: '/screenshots/home.png',
  },
  {
    tag: '피드',
    title: '흩어지던 기록이\n한 곳에 모여요',
    desc: '카톡방·갤러리·지도에 흩어지던 기록을 그리드와 리스트로 한 번에 모아봐요. 우리 팀이 함께 채워가는 피드예요.',
    accent: 'var(--color-spark)',
    img: '/screenshots/feed.png',
  },
  {
    tag: '좌표 댓글',
    title: '사진 그 지점에\n콕 찍어 한마디',
    desc: '사진 위 원하는 위치에 바로 댓글을 남겨요. 그 순간 그 장면에 팀원들의 반응이 그대로 쌓여요.',
    accent: 'var(--color-care)',
    img: '/screenshots/feed_detail.png',
  },
  {
    tag: '활동',
    title: '팀의 한 달을\n자동으로 회고',
    desc: '누가 얼마나 함께했는지 출석 차트로, 베스트 순간은 추억 큐레이션으로. 팀의 한 달이 자동으로 정리돼 다시 꺼내볼 수 있어요.',
    accent: 'var(--color-builder)',
    img: '/screenshots/activity.png',
  },
] as const satisfies readonly Feature[];
