import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tamduccuong.vercel.app";

  return [
    { url: `${base}/`, lastModified: new Date() },
    // thêm các trang bạn có:
    { url: `${base}/home`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/blogs`, lastModified: new Date() },
    { url: `${base}/quotation`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
