
import { ContactPage } from "@/lib/page/ContactPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Liên hệ tại Hiệp Phước, TP.HCM",
    template: "%s | Tâm Đức Cường",
  },
  description:
    "Liên hệ Tâm Đức Cường tại 413 Nguyễn Văn Tạo, Xã Hiệp Phước, TP.HCM qua điện thoại hoặc email để hỏi thông tin sản phẩm, quy cách và báo giá.",

  keywords: [
    "Tâm Đức Cường",
    "liên hệ Tâm Đức Cường",
    "số điện thoại Tâm Đức Cường",
    "email Tâm Đức Cường",
    "địa chỉ Tâm Đức Cường",
    "0933770378",
    "0918279361",
    "nhamaytontheptamduccuong@gmail.com"
  ],

  alternates: { canonical: "https://tamduccuong.vercel.app/contact" },
  openGraph: {
    url: "https://tamduccuong.vercel.app/contact",
    locale: "vi_VN",
    siteName: "Tâm Đức Cường",
    title: "Liên hệ | Tâm Đức Cường",
    description:
      "Thông tin liên hệ chính thức của Tâm Đức Cường: số điện thoại, email, địa chỉ và giờ làm việc.",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {
  return (
    <ContactPage/>
  );
}
