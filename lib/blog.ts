import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  date: string; // ISO
  excerpt?: string;
  cover?: string;
  tags?: string[];
  readingMinutes?: number;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
};

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const fullPath = path.join(BLOG_DIR, f);
      const file = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(file);

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? "1970-01-01"),
        excerpt: data.excerpt ? String(data.excerpt) : "",
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        cover: data.cover ? String(data.cover) : null,
        readingMinutes: data.readingMinutes,
      };
    })
    // ✅ SORT MỚI → CŨ
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    const err = new Error("POST_NOT_FOUND");
    // @ts-ignore
    err.code = "POST_NOT_FOUND";
    throw err;
  }

  const file = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(file);

  const processed = await remark().use(gfm).use(html, { sanitize: false }).process(content);

  return {
    frontmatter: {
      title: String(data.title ?? slug),
      date: String(data.date ?? "1970-01-01"),
      excerpt: data.excerpt ? String(data.excerpt) : undefined,
      cover: data.cover ? String(data.cover) : undefined,
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      readingMinutes: data.readingMinutes ? Number(data.readingMinutes) : undefined,
    },
    contentHtml: processed.toString(),
  };
}

