"use client";

import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import { WifiForm, WifiFormData, wifiFormSchema, WifiFormInput } from "@/components/wifi-form";
import { WifiCard } from "@/components/wifi-card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function WifiPage() {
  const [qrCodeValue, setQrCodeValue] = useState<string>("");
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const form = useForm<WifiFormInput, any, WifiFormData>({
    resolver: zodResolver(wifiFormSchema),
    defaultValues: {
      brandName: "",
      ssid: "",
      password: "",
      bgColor: "",
    },
    mode: "onChange",
  });

  const watchedSsid = form.watch("ssid");
  const watchedPassword = form.watch("password");
  const watchedBrandName = form.watch("brandName");
  const watchedBgColor = form.watch("bgColor");

  useEffect(() => {
    if (watchedSsid) {
      const securityType = watchedPassword ? "WPA" : "nopass";
      let wifiString = `WIFI:S:${watchedSsid};T:${securityType};`;
      if (watchedPassword) {
        wifiString += `P:${watchedPassword};`;
      }
      wifiString += ";";
      setQrCodeValue(wifiString);
    } else {
      setQrCodeValue("");
    }
  }, [watchedSsid, watchedPassword]);

  const handleFormSubmit = (data: WifiFormData) => {
    console.log("Form Submitted Data (Parsed by Zod):", data);
    toast({
      title: "폼 제출 완료 (참고용)",
      description: "QR 코드는 실시간으로 업데이트됩니다. 다운로드 버튼을 사용해 카드를 저장하세요.",
    });
  };

  const handleDownloadImage = async () => {
    if (!cardRef.current) {
      toast({
        title: "오류",
        description: "카드 요소를 찾을 수 없습니다.",
        variant: "destructive",
      });
      return;
    }
    if (!form.formState.isValid || !qrCodeValue) {
      toast({
        title: "다운로드 준비 안됨",
        description: "폼을 올바르게 입력하고 QR 코드가 생성된 후 다운로드 해주세요.",
      });
      return;
    }

    setIsDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });
      const fileName = `wifi-qr-card-${watchedBrandName?.replace(/\s+/g, '_') || 'default'}.png`;
      saveAs(dataUrl, fileName);
      toast({
        title: "다운로드 시작",
        description: `${fileName} 파일 다운로드가 시작됩니다.`,
      });
    } catch (error) {
      console.error("이미지 생성 또는 다운로드 중 오류 발생:", error);
      toast({
        title: "이미지 다운로드 오류",
        description: "이미지 생성 또는 다운로드 중 오류가 발생했습니다. 콘솔을 확인해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const cardQrCodeComponent = qrCodeValue ? (
    <QRCodeSVG
      value={qrCodeValue}
      size={150}
      fgColor="#000000"
      bgColor="#FFFFFF"
      level="Q"
      marginSize={0}
    />
  ) : null;

  const canDownload = form.formState.isValid && !!qrCodeValue;

  return (
    <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start py-8">
      <div className="md:sticky md:top-8">
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">WIFI QR 코드 생성기</h1>
          <p className="text-muted-foreground">
            WIFI 정보를 입력하고 QR 코드를 생성하세요.
          </p>
        </header>
        <WifiForm formInstance={form} onSubmit={handleFormSubmit} />
      </div>
      
      <div className="flex flex-col items-center gap-6 md:sticky md:top-8">
        <h2 className="text-2xl font-semibold text-center">카드 미리보기</h2>
        <div ref={cardRef}>
          { canDownload ? (
            <WifiCard 
              brandName={watchedBrandName || form.formState.defaultValues?.brandName || "브랜드 이름"}
              bgColor={watchedBgColor || form.formState.defaultValues?.bgColor || "#FFFFFF"}
              qrCodeComponent={cardQrCodeComponent}
            />
          ) : (
            <div 
              className="rounded-lg shadow-lg flex flex-col justify-center items-center text-center p-6 bg-muted text-muted-foreground"
              style={{ width: `256px`, height: `${256 / (3/4)}px`}}
            >
              <p className="text-lg mb-2">입력된 정보로 카드가 여기에 표시됩니다.</p>
              {!form.formState.isValid && <p className="text-sm">폼을 올바르게 입력해주세요.</p>}
              {!qrCodeValue && form.formState.isValid && <p className="text-sm">SSID를 입력하면 QR 코드가 생성됩니다.</p>}
            </div>
          )}
        </div>

        <Button 
          onClick={handleDownloadImage} 
          disabled={!canDownload || isDownloading}
          className="w-full max-w-xs"
        >
          {isDownloading ? "다운로드 중..." : "카드 이미지 다운로드 (PNG)"}
        </Button>

        <div className="mt-2 p-4 bg-card rounded-lg shadow w-full max-w-md">
          <h3 className="text-lg font-semibold mb-2 text-center">Raw QR Code Value</h3>
          <div className="text-xs text-center text-muted-foreground break-all">
            <p>{qrCodeValue || "N/A"}</p>
          </div>
        </div>
      </div>
    </section>
  );
} 