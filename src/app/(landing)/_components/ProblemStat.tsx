import { Reveal } from '@/components/Reveal';
import { Counter } from './Counter';

export function ProblemStat() {
  return (
    <section id="problem" className="bg-brand-light">
      <div className="mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <Reveal>
          <p className="text-brand text-sm font-bold tracking-wide">PROBLEM</p>
        </Reveal>

        <h2 className="mt-3 text-3xl leading-tight font-extrabold sm:text-5xl">
          <Reveal delay={80}>팀플이 끝나면,</Reveal>
          <Reveal delay={200}>그 시간은 그냥 사라져요</Reveal>
        </h2>

        <Reveal delay={340}>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-gray-500">
            “수고하셨습니다” 마지막 인사와 함께 끝나는 조별과제. 남는 건 복잡한 카톡방과, 300장
            카메라롤 어딘가에 묻혀버린 사진들뿐이에요.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-16 leading-relaxed text-gray-500">남기고 싶은 마음과 실제 기록 사이,</p>
        </Reveal>

        <div className="mt-8 grid w-full max-w-lg grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-5">
          <Reveal from="left">
            <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
              <div className="text-brand text-4xl font-extrabold sm:text-6xl">
                <Counter to={81} suffix="%" />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                보존하고
                <br />
                싶다
              </p>
            </div>
          </Reveal>

          <Reveal from="scale" delay={150}>
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-medium text-gray-400">간극</span>
              <span className="text-brand-dark text-xl font-extrabold sm:text-3xl">68%p</span>
            </div>
          </Reveal>

          <Reveal from="right" delay={300}>
            <div className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
              <div className="text-4xl font-extrabold text-gray-300 sm:text-6xl">
                <Counter to={13} suffix="%" />
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                실제로
                <br />
                남겼다
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={360}>
          <p className="mt-6 text-xs text-gray-400">N=80, 1년 이내 팀플 경험 대학생</p>
        </Reveal>
      </div>
    </section>
  );
}
