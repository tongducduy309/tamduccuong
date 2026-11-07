import type { Metadata } from "next";
import { Baloo_Bhai_2, Phudu } from 'next/font/google';
import "./globals.css";
import { NavigationProgress } from "@/lib/components/NavigationProgress";


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

const defaultTitle = "Tôn, sắt thép, xà gồ tại Nhà Bè | Tâm Đức Cường";
const defaultDescription =
  "Tâm Đức Cường cung cấp tôn lợp, tôn màu, sắt thép, thép hộp, xà gồ và vật tư xây dựng tại Nhà Bè, TP.HCM. Tư vấn quy cách, báo giá và giao hàng công trình.";

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
    "nhà máy tôn thép",
    "tôn thép Nhà Bè",
    "vật liệu xây dựng Nhà Bè",
    "sắt thép Nhà Bè",
    "xà gồ Nhà Bè",
    "tôn lợp TP.HCM"
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
    <html lang="vi" className={`${balooBhai2.variable} ${phudu.variable}`}>
      <head>
        <meta name="google-site-verification" content="7lf1VdNiAhsfiklzsWWWOtWtMAFNWrsOMFIu0LtRuwk" />
      </head>
      <body
        className={`${balooBhai2.variable} ${phudu.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "HomeAndConstructionBusiness",
                  "@id": "https://tamduccuong.vercel.app/#business",
                  name: "Nhà máy tôn thép Tâm Đức Cường",
                  alternateName: "Tâm Đức Cường",
                  url: "https://tamduccuong.vercel.app",
                  description: "Cung cấp tôn lợp, tôn màu, sắt thép, thép hộp, thép hình, xà gồ, panel, phụ kiện và gia công vật tư xây dựng tại Nhà Bè, TP.HCM.",
                  telephone: ["+84933770378", "+84918279361"],
                  email: "nhamaytontheptamduccuong@gmail.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "413 Đường Nguyễn Văn Tạo",
                    addressLocality: "Hiệp Phước",
                    addressRegion: "Thành phố Hồ Chí Minh",
                    addressCountry: "VN"
                  },
                  areaServed: [
                    { "@type": "Place", name: "Nhà Bè, Thành phố Hồ Chí Minh" },
                    { "@type": "City", name: "Thành phố Hồ Chí Minh" }
                  ],
                  knowsAbout: [
                    "Tôn lạnh và tôn kẽm",
                    "Tôn màu",
                    "Thép hộp và thép hình",
                    "Xà gồ C và Z",
                    "Tấm panel PU và EPS",
                    "Tôn PU cách nhiệt",
                    "Phụ kiện tôn thép",
                    "Gia công uốn vòm và nhấn máng"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://tamduccuong.vercel.app/#website",
                  url: "https://tamduccuong.vercel.app",
                  name: "Tâm Đức Cường",
                  inLanguage: "vi-VN",
                  publisher: { "@id": "https://tamduccuong.vercel.app/#business" }
                }
              ]
            }).replace(/</g, "\\u003c")
          }}
        />
        <NavigationProgress />
        {children}
      </body>
    </html>
  );
}
