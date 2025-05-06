# WiFi QR 코드 생성기

이 프로젝트는 WiFi 네트워크 정보를 QR 코드로 변환해주는 웹 애플리케이션입니다. Next.js 14와 TypeScript를 사용하여 개발되었습니다.

## 기술 스택

- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint

## 시작하기

먼저 개발 서버를 실행합니다:

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인할 수 있습니다.

## 프로젝트 구조

```
src/
  ├── app/          # Next.js 14 App Router
  ├── components/   # React 컴포넌트
  └── styles/       # 전역 스타일
```

## 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션용 빌드
- `npm run start`: 프로덕션 서버 실행
- `npm run lint`: ESLint를 사용한 코드 검사

## 배포

이 프로젝트는 [Vercel](https://vercel.com)을 통해 쉽게 배포할 수 있습니다.

## 라이선스

MIT
