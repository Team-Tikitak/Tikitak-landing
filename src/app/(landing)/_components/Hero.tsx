import Image from 'next/image';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { SITE } from '@/lib/site';
import { HERO_STICKERS } from '../_constants';
import { ScrollIndicator } from './ScrollIndicator';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="animate-float bg-brand-light pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full blur-2xl"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full blur-2xl"
        style={{ background: 'rgba(255,122,0,0.10)', animationDelay: '1.5s' }}
      />
      {HERO_STICKERS.map(({ src, width, height, className, animationDelay }) => (
        <Image
          key={src}
          aria-hidden
          src={src}
          alt=""
          width={width}
          height={height}
          className={className}
          style={animationDelay ? { animationDelay } : undefined}
        />
      ))}

      <div className="relative mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <Reveal>
          <span className="bg-brand-light text-brand-dark mb-6 inline-block rounded-full px-4 py-1.5 text-sm font-semibold">
            우리 팀이 탁! 맞는 순간, 티키탁
          </span>
        </Reveal>

        <h1 className="text-4xl leading-[1.15] font-extrabold tracking-tight sm:text-6xl">
          <Reveal delay={80}>팀플의 모든 순간을,</Reveal>
          <Reveal delay={200}>
            <span className="text-brand">함께 기록</span>해요
          </Reveal>
        </h1>

        <Reveal delay={160}>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-500">
            결과물은 포트폴리오에 남지만,
            <br className="hidden sm:block" /> 함께한 과정과 추억은 어디에도 남지 않죠.
            <br />
            티키탁이 그 순간들을 팀과 함께 모아둘게요.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <Button href={SITE.webAppUrl} className="w-full sm:w-auto">
              시작하기
            </Button>
            <p className="text-sm text-gray-400">Android 앱은 준비 중이에요</p>
          </div>
        </Reveal>
      </div>

      <ScrollIndicator />
    </section>
  );
}
