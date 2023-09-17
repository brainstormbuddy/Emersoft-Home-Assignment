import { TCategory } from "@/types/category.type";
import { TPost } from "@/types/post.type";
import { readFileSync } from "fs";

export const loadPosts = () => {
  const file = readFileSync("data/blog.json");
  const posts = JSON.parse(file.toString()).posts as TPost[];

  return posts;
};

export const loadCategories = () => {
  const file = readFileSync("data/blog.json");
  const categories = JSON.parse(file.toString()).categories as TCategory[];

  return categories;
};
