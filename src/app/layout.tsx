import "./globals.css";

export const metadata = {
  title: "WiFi QR Generator",
  description: "Generate QR codes for your WiFi network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
