import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { CHARACTERS } from '../_constants';

export function Characters() {
  return (
    <section className="bg-brand-light py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="text-center text-2xl leading-snug font-extrabold sm:text-3xl">
            우리 팀, 어떤 캐릭터로 모였을까?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-gray-500">
            간단한 질문으로 6가지 캐릭터 중 내 성향을 찾아요. 기록이 쌓일수록 팀의 색깔도
            또렷해져요.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3">
          {CHARACTERS.map((c, i) => (
            <Reveal key={c.name} as="li" delay={(i % 3) * 80} from="scale">
              <div className="char-card h-full rounded-3xl bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
                <Image
                  src={c.img}
                  alt={`${c.name} 캐릭터`}
                  width={72}
                  height={72}
                  className="char-img mx-auto mb-4 h-[72px] w-[72px] object-contain"
                />
                <h3 className="text-lg font-extrabold">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
