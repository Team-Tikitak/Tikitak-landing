import { BeforeAfterReveal } from './BeforeAfterReveal';

export function Manifesto() {
  return (
    <section className="bg-brand-light relative overflow-hidden">
      <BeforeAfterReveal curtainClass="bg-brand-light">
        <div className="bg-brand flex min-h-[75svh] items-center text-white">
          <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
            <h2 className="text-3xl leading-snug font-extrabold sm:text-5xl">
              팀플은 끝나도,
              <br />
              우리 팀의 순간은 남습니다
            </h2>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-white/80">
              결과물 너머의 과정까지,
              <br />
              티키탁이 팀과 함께 남겨둘게요.
            </p>
          </div>
        </div>
      </BeforeAfterReveal>
    </section>
  );
}
