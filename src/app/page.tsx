"use client";

import { WifiForm, WifiFormData } from "@/components/wifi-form";

export default function Page() {
  const handleFormSubmit = (data: WifiFormData) => {
    console.log("Form Data:", data);
    // TODO: Add logic to generate QR code and display card
  };

  return (
    <section className="max-w-md mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">WIFI QR 코드 생성기</h1>
        <p className="text-muted-foreground">
          WIFI 정보를 입력하고 QR 코드를 생성하세요.
        </p>
      </header>
      <WifiForm onSubmit={handleFormSubmit} />
    </section>
  );
}
