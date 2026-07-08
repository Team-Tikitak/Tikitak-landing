'use client';

import { useEffect, useState } from 'react';
import { SITE } from '@/lib/site';

type Status = { kind: 'redirecting' } | { kind: 'no-store'; platform: 'Android' | 'iOS' };

export function DownloadRedirect() {
  const [status, setStatus] = useState<Status>({ kind: 'redirecting' });

  useEffect(() => {
    const ua = navigator.userAgent;

    if (/android/i.test(ua)) {
      if (SITE.playStoreUrl) {
        window.location.replace(SITE.playStoreUrl);
      } else {
        setStatus({ kind: 'no-store', platform: 'Android' });
      }
      return;
    }

    if (/iphone|ipad|ipod/i.test(ua)) {
      if (SITE.appStoreUrl) {
        window.location.replace(SITE.appStoreUrl);
      } else {
        setStatus({ kind: 'no-store', platform: 'iOS' });
      }
      return;
    }

    window.location.replace(SITE.webAppUrl);
  }, []);

  if (status.kind === 'no-store') {
    return (
      <div className="flex flex-col items-center gap-6">
        <p className="text-gray-500">
          {status.platform} 앱은 아직 준비 중이에요. 웹에서 바로 시작할 수 있어요.
        </p>
        <a href={SITE.webAppUrl} className="bg-ink rounded-xl px-7 py-3.5 font-bold text-white">
          웹에서 시작하기
        </a>
      </div>
    );
  }

  return <p className="text-gray-500">스토어로 이동 중입니다…</p>;
}
