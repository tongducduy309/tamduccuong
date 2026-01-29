

import { QuotationPage } from "@/lib/page/Quotation";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: { default: "Báo giá", template: "%s | Tâm Đức Cường" },
};

export default function Quotation() {
  return (
    <QuotationPage/>
  );
}
