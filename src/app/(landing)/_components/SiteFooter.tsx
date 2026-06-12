import { SITE } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-12 text-center text-sm text-gray-400">
      <nav className="mb-3 flex justify-center gap-5">
        <a
          href={SITE.privacyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand transition"
        >
          개인정보처리방침
        </a>
        <a
          href={SITE.customerSupport}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand transition"
        >
          문의하기
        </a>
      </nav>
      <p>© 2026 {SITE.name}. All rights reserved.</p>
    </footer>
  );
}
