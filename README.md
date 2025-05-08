# WiFi QR 코드 생성기

이 프로젝트는 WiFi 네트워크 정보를 QR 코드로 변환해주는 웹 애플리케이션입니다. Next.js 14, TypeScript, Tailwind CSS를 기반으로 제작되었습니다.

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- ESLint

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
  ├── app/          # Next.js App Router 엔트리 및 페이지
  ├── components/   # 공통/도메인별 React 컴포넌트
  └── styles/       # 전역 스타일(Tailwind 등)
```

## 주요 스크립트

- `npm run dev`   : 개발 서버 실행
- `npm run build` : 프로덕션 빌드
- `npm run start` : 프로덕션 서버 실행
- `npm run lint`  : ESLint 코드 검사

## 배포

- [Vercel](https://vercel.com)로 손쉽게 배포할 수 있습니다.

## 라이선스

MIT
