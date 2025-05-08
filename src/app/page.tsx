"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center p-4">
      <h1 className="text-4xl font-bold mb-6">
        WIFI QR 코드 생성기에 오신 것을 환영합니다!
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-prose">
        매장이나 개인 용도로 사용할 수 있는 WIFI 접속 QR 코드를 손쉽게 만들어보세요.
        네트워크 정보와 원하는 스타일을 입력하면 바로 카드가 생성됩니다.
      </p>
      <Link href="/wifi" legacyBehavior passHref>
        <Button size="lg" asChild>
          <a>QR 코드 만들러 가기</a>
        </Button>
      </Link>
      <div className="mt-12 text-sm text-muted-foreground">
        <p>이 서비스는 <a href="https://toycrane.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">toycrane</a>에 의해 만들어졌습니다.</p>
      </div>
    </section>
  );
}
