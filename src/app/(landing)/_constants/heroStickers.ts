import type { HeroSticker } from './types';

export const HERO_STICKERS = [
  {
    src: '/stickers/BlueSparkle.svg',
    width: 56,
    height: 56,
    className:
      'animate-float pointer-events-none absolute top-16 left-[8%] hidden h-12 w-12 opacity-90 sm:block',
  },
  {
    src: '/stickers/YellowArrows.svg',
    width: 52,
    height: 52,
    className:
      'animate-float pointer-events-none absolute top-28 right-[10%] hidden h-11 w-11 opacity-90 sm:block',
    animationDelay: '0.8s',
  },
  {
    src: '/stickers/PinkTulip.svg',
    width: 48,
    height: 48,
    className:
      'animate-float pointer-events-none absolute bottom-24 left-[14%] hidden h-10 w-10 opacity-90 sm:block',
    animationDelay: '1.2s',
  },
  {
    src: '/stickers/OrangeSpiral.svg',
    width: 48,
    height: 48,
    className:
      'animate-float pointer-events-none absolute right-[14%] bottom-28 hidden h-10 w-10 opacity-90 sm:block',
    animationDelay: '0.4s',
  },
  {
    src: '/stickers/GreenLeaf.svg',
    width: 44,
    height: 44,
    className:
      'animate-float pointer-events-none absolute top-[44%] left-[5%] hidden h-9 w-9 opacity-90 lg:block',
    animationDelay: '0.6s',
  },
  {
    src: '/stickers/RedAsterisk.svg',
    width: 40,
    height: 40,
    className:
      'animate-float pointer-events-none absolute bottom-[38%] left-[10%] hidden h-9 w-9 opacity-90 lg:block',
    animationDelay: '1.4s',
  },
  {
    src: '/stickers/OrangeSun.svg',
    width: 44,
    height: 44,
    className:
      'animate-float pointer-events-none absolute top-[40%] right-[5%] hidden h-9 w-9 opacity-90 lg:block',
    animationDelay: '1s',
  },
  {
    src: '/stickers/PinkSquiggle.svg',
    width: 40,
    height: 40,
    className:
      'animate-float pointer-events-none absolute right-[10%] bottom-[42%] hidden h-9 w-9 opacity-90 lg:block',
    animationDelay: '0.2s',
  },
] satisfies readonly HeroSticker[];
