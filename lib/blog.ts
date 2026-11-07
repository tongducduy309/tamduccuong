import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const WORDS_PER_MINUTE = 200;

export type BlogFrontmatter = {
  title: string;
  date: string;
  updatedAt?: string;
  excerpt?: string;
  cover?: string;
  tags?: string[];
  readingMinutes?: number;
};

export type BlogPost = BlogFrontmatter & { slug: string };

function estimateReadingMinutes(content: string): number {
  const words = content
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/[#>*\x60_~|-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

function isPublished(dateValue: string): boolean {
  const todayInVietnam = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
  }).format(new Date());
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) return dateValue <= todayInVietnam;
  const timestamp = new Date(dateValue).getTime();
  return Number.isFinite(timestamp) && timestamp <= Date.now();
}

function toOptionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));
}

export function getAllSlugs(): string[] {
  return getMarkdownFiles().filter((file) => {
    const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, file), "utf-8"));
    return isPublished(String(data.date ?? "1970-01-01"));
  }).map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPost[] {
  return getMarkdownFiles()
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(source);
      const date = String(data.date ?? "1970-01-01");
      if (!isPublished(date)) return null;
      return {
        slug,
        title: String(data.title ?? slug),
        date,
        updatedAt: toOptionalString(data.updatedAt),
        excerpt: toOptionalString(data.excerpt),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        cover: toOptionalString(data.cover),
        readingMinutes: Number(data.readingMinutes) > 0
          ? Math.ceil(Number(data.readingMinutes))
          : estimateReadingMinutes(content),
      };
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string) {
  if (!/^[a-zA-Z0-9-]+$/.test(slug)) {
    const error = new Error("POST_NOT_FOUND");
    Object.assign(error, { code: "POST_NOT_FOUND" });
    throw error;
  }

  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    const error = new Error("POST_NOT_FOUND");
    Object.assign(error, { code: "POST_NOT_FOUND" });
    throw error;
  }

  const source = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(source);
  const date = String(data.date ?? "1970-01-01");
  if (!isPublished(date)) {
    const error = new Error("POST_NOT_FOUND");
    Object.assign(error, { code: "POST_NOT_FOUND" });
    throw error;
  }

  const title = String(data.title ?? slug);
  const normalizedContent = content.replace(/^\s*#\s+(.+?)\s*(?:\r?\n)+/, (heading, headingText) =>
    headingText.trim().toLocaleLowerCase("vi") === title.trim().toLocaleLowerCase("vi") ? "" : heading
  );
  const processed = await remark()
    .use(gfm)
    .use(html, { sanitize: true })
    .process(normalizedContent);

  return {
    frontmatter: {
      title,
      date,
      updatedAt: toOptionalString(data.updatedAt),
      excerpt: toOptionalString(data.excerpt),
      cover: toOptionalString(data.cover),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      readingMinutes: Number(data.readingMinutes) > 0
        ? Math.ceil(Number(data.readingMinutes))
        : estimateReadingMinutes(normalizedContent),
    } satisfies BlogFrontmatter,
    contentHtml: processed.toString(),
    wordCount: normalizedContent.trim().split(/\s+/).filter(Boolean).length,
  };
}
