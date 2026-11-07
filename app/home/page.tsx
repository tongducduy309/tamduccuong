
import { MainPage } from "@/lib/page/MainPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tôn, sắt thép, xà gồ tại Nhà Bè",
  description: "Tâm Đức Cường cung cấp tôn lạnh, tôn màu, thép hộp, thép hình, xà gồ, panel và vật tư xây dựng tại Nhà Bè, TP.HCM. Liên hệ tư vấn quy cách và báo giá.",
  alternates: { canonical: "https://tamduccuong.vercel.app/home" },
  openGraph: {
    type: "website", locale: "vi_VN", url: "https://tamduccuong.vercel.app/home",
    siteName: "Tâm Đức Cường", title: "Tôn, sắt thép, xà gồ tại Nhà Bè | Tâm Đức Cường",
    description: "Cung cấp tôn lợp, sắt thép, xà gồ và vật tư xây dựng tại Nhà Bè, TP.HCM.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tôn thép Tâm Đức Cường" }],
  },
};



export default function HomePage() {
  return (
      <MainPage/>
  );
}
