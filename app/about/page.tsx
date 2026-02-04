


import Layout from "@/lib/layouts/(layout)/layout";
import { Metadata } from "next";
import AboutPage from "@/lib/page/AboutPage";


export const metadata: Metadata = {
  title: {
    default: "Về chúng tôi",
    template: "%s | Tâm Đức Cường",
  },

  description:
    "Tâm Đức Cường chuyên cung cấp tôn, sắt, thép, xà gồ và vật liệu xây dựng tại khu vực Nhà Bè. Uy tín – giá tốt – giao hàng nhanh tận công trình.",

  alternates: {
    canonical: "https://tamduccuong.vercel.app/ve-chung-toi",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://tamduccuong.vercel.app/ve-chung-toi",
    title: "Về chúng tôi – Vật liệu xây dựng Nhà Bè, Hồ Chí Minh",
    description:
      "Giới thiệu Tâm Đức Cường – đơn vị cung cấp tôn, sắt, thép, xà gồ, vật liệu xây dựng uy tín tại Nhà Bè, Hồ Chí Minh.",
    siteName: "Tâm Đức Cường",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Vật liệu xây dựng Nhà Bè, Hồ Chí Minh – Tâm Đức Cường",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Về chúng tôi – Vật liệu xây dựng Nhà Bè, Hồ Chí Minh",
    description:
      "Tâm Đức Cường – cung cấp tôn, sắt, thép, xà gồ, vật liệu xây dựng tại Nhà Bè, Hồ Chí Minh.",
    images: ["/og.png"],
  },
};

export default function About() {
  return (
    <AboutPage/>
  );
}
