import { SITE } from '@/lib/site';
import { DownloadRedirect } from './DownloadRedirect';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '앱 다운로드',
  robots: { index: false, follow: false },
};

export default function DownloadPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <DownloadRedirect />

      <noscript>
        <div className="flex flex-col gap-3">
          <p className="text-gray-500">아래에서 직접 선택해 주세요.</p>
          {SITE.appStoreUrl && (
            <a
              href={SITE.appStoreUrl}
              className="bg-ink rounded-xl px-7 py-3.5 font-bold text-white"
            >
              App Store
            </a>
          )}
          {SITE.playStoreUrl && (
            <a
              href={SITE.playStoreUrl}
              className="bg-ink rounded-xl px-7 py-3.5 font-bold text-white"
            >
              Google Play
            </a>
          )}
          <a
            href={SITE.webAppUrl}
            className="text-ink rounded-xl border border-gray-300 px-7 py-3.5 font-bold"
          >
            웹에서 시작하기
          </a>
        </div>
      </noscript>
    </main>
  );
}
