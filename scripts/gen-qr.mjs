// 빌드타임 정적 QR 생성: pnpm qr
// QR은 고정 /download URL만 담음 → 스토어 링크가 바뀌어도 QR은 그대로.
import { writeFileSync, mkdirSync } from 'node:fs';
import QRCode from 'qrcode';

const SITE_URL = process.env.SITE_URL ?? 'https://tikitak.space';
const target = `${SITE_URL}/download/`;

const svg = await QRCode.toString(target, {
  type: 'svg',
  margin: 1,
  color: { dark: '#121212', light: '#ffffff' },
});

mkdirSync('public', { recursive: true });
writeFileSync('public/qr.svg', svg);
console.log(`✓ public/qr.svg 생성 완료 → ${target}`);
