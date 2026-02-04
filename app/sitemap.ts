import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tamduccuong.vercel.app";

  return [
    { url: `${base}/`, lastModified: new Date() },
    // thêm các trang bạn có:
    // { url: `${base}/about`, lastModified: new Date() },
    // { url: `${base}/blog`, lastModified: new Date() },
  ];
}
