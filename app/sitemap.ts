import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { products } from "@/lib/products";

const BASE_URL = "https://tamduccuong.vercel.app";

function validDate(value?: string): Date | undefined {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/home`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blogs`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/san-pham`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/vat-lieu-xay-dung-hiep-phuoc`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/quotation`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/san-pham/${product.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blogs/${encodeURIComponent(post.slug)}`,
    lastModified: validDate(post.updatedAt) ?? validDate(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
