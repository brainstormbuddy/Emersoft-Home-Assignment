import Link from "next/link";
import FilterGroup from "@/components/FilterGroup";
import Post from "@/components/Post";
import { findCategories } from "@/helpers/categories.helper";
import { setValueAndGetUrlFromSearchParams } from "@/helpers/queryParams.helper";
import { CATEGORIES_ENDPOINT, POSTS_ENDPOINT } from "@/config/endpoints.config";
import {
  CATEGORY_PARAM_KEY,
  PAGE_PARAM_KEY,
  PAGE_SIZE,
  SEARCH_PARAM_KEY,
} from "@/config/constants.config";
import { TCategory } from "@/types/category.type";
import { TPost } from "@/types/post.type";

async function getData(
  page: number,
  category: string,
  search: string,
): Promise<{ posts: TPost[]; categories: TCategory[] }> {
  const [posts, categories] = await Promise.allSettled([
    fetch(`${POSTS_ENDPOINT}?page=${page}&category=${category}&search=${search}`),
    fetch(CATEGORIES_ENDPOINT),
  ]);

  return {
    posts: await (posts as any).value.json(),
    categories: await (categories as any).value.json(),
  };
}

export const metadata = {
  title: "Emersoft Posts",
  description: "Emersoft Test Assignment",
  openGraph: {
    images: ["/images/blog.jpg"],
  },
};

export default async function Home({ searchParams }: { searchParams: any }) {
  // const page = Number(searchParams[PAGE_PARAM_KEY] || "1");
  const page = Number(searchParams[PAGE_PARAM_KEY] || "1");

  const category = searchParams[CATEGORY_PARAM_KEY] || "";
  const search = searchParams[SEARCH_PARAM_KEY] || "";

  const { posts, categories } = await getData(page, category, search);

  return (
    <>
      <FilterGroup categories={categories} />
      <section className="container">
        <div className="flex flex-wrap justify-center tablet:justify-start gap-8 mb-8">
          {posts.length ? (
            posts.map((post) => (
              <Post
                key={post.slug}
                {...post}
                categoriesData={findCategories(post.categories, categories)}
              />
            ))
          ) : (
            <h3 className="text-center w-full dark:text-white">There are no results.</h3>
          )}
        </div>
      </section>

      <ul className="flex justify-center items-center gap-8">
        {page > 1 && (
          <li>
            <Link
              className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow hover:shadow-lg transition-all dark:bg-gray-300 dark:text-black"
              href={`?${setValueAndGetUrlFromSearchParams(
                PAGE_PARAM_KEY,
                (page - 1).toString(),
                searchParams,
              )}`}>
              Prev
            </Link>
          </li>
        )}
        {posts.length === PAGE_SIZE && (
          <li className="w-[97px]">
            <Link
              className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow hover:shadow-lg ease-in-out duration-300 dark:bg-gray-300 dark:text-black"
              href={`?${setValueAndGetUrlFromSearchParams(
                PAGE_PARAM_KEY,
                (page + 1).toString(),
                searchParams,
              )}`}>
              Next
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}
