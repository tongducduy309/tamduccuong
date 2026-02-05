
import { ContactPage } from "@/lib/page/ContactPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    default: "Liên hệ",
    template: "%s | Tâm Đức Cường",
  },
  description:
    "Liên hệ Tâm Đức Cường – hỗ trợ nhanh chóng qua điện thoại, email. Địa chỉ rõ ràng, giờ làm việc linh hoạt.",

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

  openGraph: {
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
