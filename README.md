# WiFi QR 코드 생성기

이 프로젝트는 매장 또는 개인 용도로 사용할 수 있는 WiFi 네트워크 정보를 QR 코드로 변환해주는 웹 애플리케이션입니다. Next.js 15, TypeScript, Tailwind CSS 기반으로 제작되었습니다.

## 주요 기능
- WiFi 정보(브랜드명, SSID, 비밀번호, 배경색) 입력 폼
- 실시간 QR 코드 및 카드 미리보기
- 미니멀한 카드 디자인(256px, 3:4 비율, 브랜드명/라벨 표시)
- PNG 이미지로 카드 다운로드
- 반응형 UI 및 직관적인 UX
- 실시간 폼 유효성 검사 및 에러/성공 토스트 알림

## 기술 스택
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- react-hook-form, zod (폼 관리/유효성)
- html-to-image, file-saver (이미지 변환/다운로드)
- Radix UI, Lucide 아이콘

## 시작하기

1. 의존성 설치:

```bash
npm install
# 또는
yarn
# 또는
pnpm install
```

2. 개발 서버 실행:

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 프로젝트 구조

```
src/
  ├── app/           # Next.js App Router 엔트리, 페이지, 레이아웃, 글로벌 스타일
  │   ├── page.tsx   # 메인 홈(소개) 페이지
  │   ├── layout.tsx # 전체 레이아웃 및 Toaster
  │   └── wifi/      # WiFi QR 생성 주요 페이지
  ├── components/    # 공통/도메인별 React 컴포넌트
  │   ├── wifi-form.tsx  # WiFi 정보 입력 폼
  │   ├── wifi-card.tsx  # 카드 미리보기/디자인
  │   └── ui/        # Button, Input, Form, Toast 등 UI 컴포넌트
  ├── hooks/         # 커스텀 훅 (예: use-toast)
  ├── lib/           # 유틸리티 함수 (예: utils.ts)
  └── spec/          # 기획/문서 (예: prd.md)
```

## 주요 설정 파일
- `next.config.mjs` : Next.js 설정
- `tailwind.config.js` : Tailwind CSS 설정
- `tsconfig.json` : TypeScript 설정
- `eslint.config.mjs` : ESLint 설정

## 주요 스크립트
- `npm run dev`   : 개발 서버 실행
- `npm run build` : 프로덕션 빌드
- `npm run start` : 프로덕션 서버 실행
- `npm run lint`  : ESLint 코드 검사

## 라이선스
MIT
