# Tikitak Landing

팀 프로젝트의 과정과 추억을 팀원들과 함께 기록하는 서비스 **티키탁(tiki-tak!)**의 공식 랜딩 페이지입니다.

서비스 소개부터 주요 기능, 팀 캐릭터, FAQ, 앱 다운로드까지 이어지는 사용자 경험을 제공합니다.

## 목차

- [기술 스택](#-기술-스택)
- [아키텍처 & 디렉토리 구조](#-아키텍처--디렉토리-구조)

## 🖥 기술 스택

| Category        | Stack                                                   |
| --------------- | ------------------------------------------------------- |
| Language        | TypeScript                                              |
| Framework       | Next.js 15, React 19                                    |
| Styling         | Tailwind CSS 4, tailwind-variants, clsx, tailwind-merge |
| Rendering       | Static Export                                           |
| Code Quality    | ESLint, Prettier                                        |
| Package Manager | pnpm                                                    |

## 🏗 아키텍처 & 디렉토리 구조

Next.js App Router 기반으로 구성하며, 랜딩 전용 코드와 공용 UI·훅을 분리했습니다.

```text
src/
├── app/
│   ├── (landing)/              # 랜딩 페이지
│   │   ├── _components/        # 랜딩 전용 섹션과 인터랙션
│   │   └── _constants/         # 랜딩 콘텐츠와 타입
│   ├── download/               # 기기별 다운로드 리다이렉트
│   ├── layout.tsx              # 메타데이터와 구조화 데이터
│   ├── robots.ts
│   └── sitemap.ts
├── components/                 # 공용 UI 컴포넌트
├── hooks/                      # 공용 클라이언트 훅
└── lib/                        # 사이트 설정과 공용 유틸리티

public/
├── characters/                 # 팀 캐릭터
├── logo/                       # 브랜드 로고
├── screenshots/                # 서비스 화면 이미지
├── stickers/                   # 랜딩 장식 에셋
└── qr.svg                      # 다운로드 QR 코드
```
