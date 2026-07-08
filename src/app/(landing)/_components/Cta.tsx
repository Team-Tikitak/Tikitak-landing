import Image from 'next/image';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { SITE } from '@/lib/site';

export function Cta() {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center text-white">
        <Reveal>
          <span className="mb-5 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">
            지금은 모든 기능 무료
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl font-extrabold">지금, 우리 팀의 첫 기록</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-3 text-white/80">QR을 스캔하면 앱을 다운로드할 수 있어요.</p>
        </Reveal>
        <Reveal delay={160} from="scale">
          <div className="mt-8 rounded-3xl bg-white p-5 shadow-lg">
            <Image
              src="/qr.svg"
              alt={`${SITE.name} 앱 다운로드 QR 코드`}
              width={172}
              height={172}
            />
          </div>
        </Reveal>
        <Reveal delay={240}>
          <Button href="/download/" variant="white" className="mt-10">
            다운로드
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
