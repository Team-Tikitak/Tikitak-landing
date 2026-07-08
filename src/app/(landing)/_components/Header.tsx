'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/Button';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/cn';
import { SITE } from '@/lib/site';

export function Header() {
  const scrolled = useScrolled(8);

  // 히어로(min-h-svh)를 지나 스크롤했을 때만 CTA 노출 — 모바일마다 뷰포트 높이가 달라 고정 픽셀 대신 실측값 사용
  const [ctaThreshold, setCtaThreshold] = useState(600);
  useEffect(() => {
    setCtaThreshold(window.innerHeight * 0.8);
  }, []);
  const showCta = useScrolled(ctaThreshold);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-gray-100 bg-white/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <a href="#top" aria-label="티키탁 홈" className="flex items-center">
          <Image
            src="/logo/tiki-tak_Logo.svg"
            alt="tiki-tak!"
            width={94}
            height={26}
            priority
            className="h-[26px] w-auto"
          />
        </a>
        <Button
          href={SITE.webAppUrl}
          size="sm"
          className={cn(
            'transition-all duration-300 hover:shadow-lg',
            showCta
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-1 opacity-0',
          )}
        >
          시작하기
        </Button>
      </div>
    </header>
  );
}
