import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/cn';
import { FEATURES } from '../_constants';

export function Solution() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 sm:py-32">
      <Reveal>
        <p className="text-brand text-center text-sm font-bold tracking-wide">SOLUTION</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-3 text-center text-2xl leading-snug font-extrabold sm:text-3xl">
          기록의 허들은 낮추고,
          <br />
          추억은 또렷하게
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-24 sm:gap-28">
        {FEATURES.map((f, i) => (
          <Reveal key={f.tag} from={i % 2 === 0 ? 'left' : 'right'}>
            <div className="grid items-center gap-8 sm:grid-cols-2">
              <div className={i % 2 === 1 ? 'sm:order-2' : ''}>
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-bold"
                  style={{ background: f.accent, color: '#fff' }}
                >
                  {f.tag}
                </span>
                <h3 className="mt-4 text-2xl leading-snug font-extrabold whitespace-pre-line">
                  {f.title}
                </h3>
                <p className="mt-4 leading-relaxed text-gray-500">{f.desc}</p>
              </div>
              <div
                className={cn(
                  'relative flex items-center justify-center',
                  i % 2 === 1 && 'sm:order-1',
                )}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute h-64 w-64 rounded-full blur-2xl"
                  style={{ background: `color-mix(in srgb, ${f.accent} 24%, white)` }}
                />
                <div className="relative w-full max-w-[260px]">
                  <div className="relative aspect-[9/19.3] rounded-[2.3rem] bg-gray-900 p-[6px] shadow-[0_24px_60px_-15px_rgba(17,24,39,0.45)]">
                    <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-white">
                      <Image
                        src={f.img}
                        alt={`${f.tag} 화면`}
                        fill
                        sizes="260px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
