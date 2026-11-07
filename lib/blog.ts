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

export type BlogPost = BlogFrontmatter & {
  slug: string;
};

function estimateReadingMinutes(content: string): number {
  const words = content
    .replace(/![[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/[#>*`_~|-]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

function toOptionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(BLOG_DIR, file);
      const source = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(source);

      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? "1970-01-01"),
        updatedAt: toOptionalString(data.updatedAt),
        excerpt: toOptionalString(data.excerpt),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        cover: toOptionalString(data.cover),
        readingMinutes:
          Number(data.readingMinutes) > 0
            ? Math.ceil(Number(data.readingMinutes))
            : estimateReadingMinutes(content),
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export async function getPostBySlug(slug: string) {
  // Slugs are file names, not arbitrary filesystem paths.
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
  const processed = await remark()
    .use(gfm)
    .use(html, { sanitize: true })
    .process(content);

  return {
    frontmatter: {
      title: String(data.title ?? slug),
      date: String(data.date ?? "1970-01-01"),
      updatedAt: toOptionalString(data.updatedAt),
      excerpt: toOptionalString(data.excerpt),
      cover: toOptionalString(data.cover),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      readingMinutes:
        Number(data.readingMinutes) > 0
          ? Math.ceil(Number(data.readingMinutes))
          : estimateReadingMinutes(content),
    } satisfies BlogFrontmatter,
    contentHtml: processed.toString(),
    wordCount: content.trim().split(/\s+/).filter(Boolean).length,
  };
}
