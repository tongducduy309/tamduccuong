

import { QuotationPage } from "@/lib/page/Quotation";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Báo giá tôn, sắt thép mới nhất",
  description:
    "Cập nhật báo giá tôn lợp, thép xây dựng, thép hộp, xà gồ, phụ kiện. Liên hệ để nhận báo giá nhanh và chiết khấu tốt.",
  keywords: ["báo giá tôn", "báo giá sắt thép", "báo giá thép hộp", "báo giá xà gồ", "giá tôn Nhà Bè", "giá vật liệu xây dựng TP.HCM"],
  openGraph: {
    type: "website", locale: "vi_VN", url: "https://tamduccuong.vercel.app/quotation",
    siteName: "Tâm Đức Cường", title: "Báo giá tôn, sắt thép và xà gồ | Tâm Đức Cường",
    description: "Liên hệ Tâm Đức Cường để nhận báo giá tôn, thép hộp, thép hình, xà gồ và vật tư xây dựng theo quy cách và số lượng.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Báo giá tôn thép Tâm Đức Cường" }],
  },
  alternates: {
    canonical: "https://tamduccuong.vercel.app/quotation",
  },
};

export default function Quotation() {
  return (
    <QuotationPage/>
  );
}
