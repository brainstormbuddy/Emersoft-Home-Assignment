import { NextResponse } from "next/server";
import { findCategories } from "@/helpers/categories.helper";
import { loadCategories, loadPosts } from "@/helpers/data.helper";

export async function GET(_: Request, { params: { slug } }: { params: { slug: string } }) {
  const posts = loadPosts();
  const categories = loadCategories();

  const post = posts.find((post) => post.slug === slug);

  if (post) {
    post.categoriesData = findCategories(post?.categories, categories);
  }

  return NextResponse.json(post || null);
}
