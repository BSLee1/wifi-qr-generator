"use client";

import { UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const wifiFormSchema = z.object({
  brandName: z.string().min(1, "브랜드 이름을 입력해주세요.").max(50, "브랜드 이름은 50자 이내로 입력해주세요."),
  ssid: z.string().min(1, "네트워크 이름(SSID)을 입력해주세요.").max(32, "네트워크 이름(SSID)은 32자 이내로 입력해주세요."),
  password: z.string().min(8, "비밀번호는 8자 이상 입력해주세요.").max(63, "비밀번호는 63자 이내로 입력해주세요."),
  bgColor: z.string().regex(/^#[0-9A-Fa-f]{6}$/, "유효한 HEX 색상 코드를 입력해주세요. (예: #RRGGBB)").default("#FFFFFF"),
});

export type WifiFormData = z.infer<typeof wifiFormSchema>;
export type WifiFormInput = z.input<typeof wifiFormSchema>;

interface WifiFormProps {
  formInstance: UseFormReturn<WifiFormInput, any, WifiFormData>;
  onSubmit: (data: WifiFormData) => void;
}

export function WifiForm({ formInstance, onSubmit }: WifiFormProps) {
  return (
    <Form {...formInstance}>
      <form onSubmit={formInstance.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={formInstance.control}
          name="brandName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>브랜드 이름</FormLabel>
              <FormControl>
                <Input placeholder="예: Bslee Cafe" {...field} />
              </FormControl>
              <FormDescription>
                카드 하단에 표시될 브랜드 이름입니다.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formInstance.control}
          name="ssid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>네트워크 이름 (SSID)</FormLabel>
              <FormControl>
                <Input placeholder="예: Bslee_Guest_WiFi" {...field} />
              </FormControl>
              <FormDescription>
                WIFI 네트워크의 이름 (SSID)입니다.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formInstance.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WIFI 비밀번호</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormDescription>
                WIFI 네트워크의 비밀번호입니다.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formInstance.control}
          name="bgColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>카드 배경색</FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Input 
                    type="color" 
                    value={field.value || "#FFFFFF"}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="w-12 h-10 p-1 cursor-pointer"
                  />
                  <Input 
                    placeholder="#FFFFFF" 
                    {...field}
                    value={field.value || ""}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (value && !value.startsWith("#")) {
                        value = "#" + value;
                      }
                      field.onChange(value);
                    }}
                  />
                </div>
              </FormControl>
              <FormDescription>
                QR 카드 배경색을 선택하거나 HEX 코드를 직접 입력하세요.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">QR 카드 생성 준비</Button>
      </form>
    </Form>
  );
} 