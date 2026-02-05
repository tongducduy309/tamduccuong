import type { Metadata } from "next";
import { Baloo_Bhai_2, Phudu } from 'next/font/google';
import "./globals.css";


const balooBhai2 = Baloo_Bhai_2({
  subsets: ['vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo-bhai-2', 
});

const phudu = Phudu({
  subsets: ['vietnamese'],
  weight: '700', // Chỉ định trọng lượng cụ thể
  variable: '--font-phudu', // Đặt biến CSS cho font này
});


const siteName = "Tâm Đức Cường - Vật liệu xây dựng";
const siteUrl = "https://tamduccuong.vercel.app";

const defaultTitle = "Tôn, Sắt, Thép, Xà gồ | Báo giá & Giao hàng nhanh";
const defaultDescription =
  "Chuyên cung cấp tôn lợp, sắt thép xây dựng, xà gồ, phụ kiện, vật tư công trình. Báo giá nhanh, hàng chuẩn chất lượng, giao hàng tận nơi.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },

  description: defaultDescription,

  keywords: [
    "vật liệu xây dựng",
    "tôn",
    "tôn lợp",
    "tôn lạnh",
    "tôn màu",
    "sắt thép",
    "thép xây dựng",
    "xà gồ",
    "ống thép",
    "thép hộp",
    "lưới B40",
    "phụ kiện tôn",
    "báo giá tôn",
    "báo giá thép",
    "giao hàng vật liệu xây dựng",
    "nhà máy tôn",
    "nhà máy tôn thép"
  ],

  applicationName: siteName,
  authors: [{ name: "Tâm Đức Cường" }],
  creator: "Tâm Đức Cường",
  publisher: "Tâm Đức Cường",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Open Graph (Facebook/Zalo/LinkedIn)
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og.png", // đặt trong /public
        width: 1200,
        height: 630,
        alt: "Báo giá tôn, sắt thép, xà gồ",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og.png"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Cho mobile browser
  themeColor: "#0f172a",

  // Giúp Google hiểu category website
  category: "construction",

  // Nếu bạn có brand/logo
  // manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${balooBhai2.variable} ${phudu.variable}`}>
      <head>
        <meta name="google-site-verification" content="7lf1VdNiAhsfiklzsWWWOtWtMAFNWrsOMFIu0LtRuwk" />
      </head>
      <body
        className={`${balooBhai2.variable} ${phudu.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
