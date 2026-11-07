

import { QuotationPage } from "@/lib/page/Quotation";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Yêu cầu báo giá tôn, sắt thép và xà gồ tại Hiệp Phước",
  description:
    "Gửi yêu cầu báo giá tôn lợp, tôn màu, thép hộp, thép hình, xà gồ và phụ kiện theo quy cách, số lượng và địa điểm giao hàng. Giá và khả năng cung ứng được xác nhận theo từng yêu cầu.",
  keywords: ["báo giá tôn", "báo giá sắt thép", "báo giá thép hộp", "báo giá xà gồ", "giá tôn Hiệp Phước", "giá vật liệu xây dựng TP.HCM"],
  openGraph: {
    type: "website", locale: "vi_VN", url: "https://tamduccuong.vercel.app/quotation",
    siteName: "Tâm Đức Cường", title: "Yêu cầu báo giá tôn, sắt thép và xà gồ | Tâm Đức Cường",
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
