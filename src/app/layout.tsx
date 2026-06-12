import { SITE } from '@/lib/site';
import type { Metadata } from 'next';
import './globals.css';

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;
const naverSiteVerification = process.env.NAVER_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    '팀플',
    '팀 프로젝트',
    '조별과제',
    '추억 기록',
    '대학생',
    '아카이브',
    'Tikitak',
    '티키탁',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    locale: 'ko_KR',
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true },
  verification: {
    ...(googleSiteVerification && { google: googleSiteVerification }),
    ...(naverSiteVerification && {
      other: { 'naver-site-verification': naverSiteVerification },
    }),
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE.name,
  description: SITE.description,
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS, Android, Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  url: SITE.url,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
