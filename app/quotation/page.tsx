

import { QuotationPage } from "@/lib/page/Quotation";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Báo giá tôn, sắt thép mới nhất",
  description:
    "Cập nhật báo giá tôn lợp, thép xây dựng, thép hộp, xà gồ, phụ kiện. Liên hệ để nhận báo giá nhanh và chiết khấu tốt.",
  alternates: {
    canonical: "https://tamduccuong.vercel.app/quotation",
  },
};

export default function Quotation() {
  return (
    <QuotationPage/>
  );
}
