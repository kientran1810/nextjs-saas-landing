import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogLayout from "#/src/components/BlogLayout";
import { notFound } from "next/navigation";
import rehypeSlug from "rehype-slug";

interface BlogPageProps {
  params: {
    slug: string;
  };
  searchParams: {
    lang?: string;
  };
}

// Helper function to get blog content
async function getBlogContent(slug: string, lang: string = "vi") {
  const contentDir = path.join(process.cwd(), "content", "blogs", slug);
  const filePath = path.join(contentDir, `${lang}.md`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "content", "blogs");
  
  // Check if directory exists
  if (!fs.existsSync(blogsDir)) {
    return [];
  }

  const blogFolders = fs.readdirSync(blogsDir);

  return blogFolders.map((slug) => ({
    slug,
  }));
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { slug } = params;
  const lang = searchParams.lang || "vi";

  const blogData = await getBlogContent(slug, lang);

  if (!blogData) {
    notFound();
  }

  const { frontmatter, content } = blogData;

  return (
    <BlogLayout
      title={frontmatter.title}
      description={frontmatter.description}
      category={frontmatter.category}
      date={frontmatter.date}
      author={frontmatter.author}
      image={frontmatter.image}
    >
      <MDXRemote 
        source={content}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeSlug],
          },
        }}
      />
    </BlogLayout>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params, searchParams }: BlogPageProps) {
  const { slug } = params;
  const lang = searchParams.lang || "vi";

  const blogData = await getBlogContent(slug, lang);

  if (!blogData) {
    return {
      title: "Blog Not Found",
    };
  }

  const { frontmatter } = blogData;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      images: [frontmatter.image],
    },
  };
}
