import type { Character } from './types';

export const CHARACTERS = [
  {
    name: '탁리더',
    desc: '우리 팀은 내가 책임진다! 책임감 있는 당신',
    img: '/characters/TakLeader.svg',
  },
  {
    name: '탁스파크',
    desc: '아이디어 팍! 두 눈 충혈될 때까지 달린 당신',
    img: '/characters/TakSpark.svg',
  },
  {
    name: '탁버너',
    desc: '번아웃 온 지 오래지만 오늘도 해내는 당신',
    img: '/characters/TakBurner.svg',
  },
  {
    name: '탁빌더',
    desc: '솔루션은 나의 몫. 언제나 해결책이 있는 당신',
    img: '/characters/TakBuilder.svg',
  },
  {
    name: '탁케어',
    desc: '우리 팀 분위기 메이커는 나! 멘탈 수호자',
    img: '/characters/TakCare.svg',
  },
  {
    name: '탁프리',
    desc: '언제나 자유로운 영혼, 필요할 땐 열일하는 당신',
    img: '/characters/TakFree.svg',
  },
] as const satisfies readonly Character[];
