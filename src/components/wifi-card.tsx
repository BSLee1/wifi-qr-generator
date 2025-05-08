"use client";

import React from "react";

interface WifiCardProps {
  brandName: string;
  bgColor: string;
  qrCodeComponent: React.ReactNode;
  // 네트워크 이름(SSID)도 필요에 따라 추가할 수 있습니다.
  // ssid: string;
}

const CARD_WIDTH = 256; // px
const CARD_ASPECT_RATIO = 3 / 4; // width / height
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO; // approx 341.33px

export function WifiCard({ brandName, bgColor, qrCodeComponent }: WifiCardProps) {
  return (
    <div
      className="rounded-lg shadow-lg flex flex-col p-6 text-white relative overflow-hidden"
      style={{
        width: `${CARD_WIDTH}px`,
        height: `${CARD_HEIGHT}px`,
        backgroundColor: bgColor,
      }}
    >
      {/* Card Content */}
      <header className="text-center mb-4">
        <h2 className="text-xl font-semibold tracking-tight">
          WIFI 접속
        </h2>
      </header>

      <main className="flex-grow flex justify-center items-center my-4">
        {/* QR Code는 흰색 배경 위에 표시되어야 가독성이 좋음 */}
        <div className="bg-white p-3 rounded-md shadow-sm">
          {qrCodeComponent} 
        </div>
      </main>

      <footer className="mt-auto text-center">
        <p className="text-2xl font-bold leading-tight truncate" title={brandName}>
          {brandName || "브랜드 이름"}
        </p>
        <p className="text-xs font-medium opacity-75 absolute bottom-2 right-3">
          by bslee
        </p>
      </footer>
    </div>
  );
} 