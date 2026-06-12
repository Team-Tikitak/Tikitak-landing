export interface Character {
  name: string;
  desc: string;
  img: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Feature {
  tag: string;
  title: string;
  desc: string;
  accent: string;
  img: string;
}

export interface HeroSticker {
  src: string;
  width: number;
  height: number;
  className: string;
  animationDelay?: string;
}
