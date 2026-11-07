import type { MetadataRoute } from "next";

const SITE_URL = "https://tamduccuong.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // Cho phép ChatGPT Search khám phá và trích dẫn nội dung công khai.
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      {
        // GPTBot phục vụ mục đích huấn luyện, độc lập với tìm kiếm ChatGPT.
        // Giữ quyền kiểm soát nội dung huấn luyện tách biệt với quyền xuất hiện trong Search.
        userAgent: "GPTBot",
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
