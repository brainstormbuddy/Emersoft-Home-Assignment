"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Category from "./Category";
import { ImageWithFallback } from "./ImageWithFallback";
import { SEARCH_PARAM_KEY, SUMMARY_LENGTH } from "../config/constants.config";
import { TPost } from "../types/post.type";
import { TCategory } from "../types/category.type";

type Props = Omit<TPost, "id"> & {
  categoriesData: TCategory[];
};

export default function Post(props: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const search = params.get(SEARCH_PARAM_KEY) || "";

  return (
    <article
      onClick={() => router.push(`/${props.slug}`)}
      className="rounded-lg shadow-lg bg-white w-[400px] hover:translate-y-1 transition-all cursor-pointer dark:bg-black">
      <ImageWithFallback
        className="rounded-t object-cover"
        src={props.imageUrl}
        alt={props.title}
        width={400}
        height={300}
      />
      <div className="p-4">
        <div className="flex gap-4 mb-2">
          {props.categoriesData.map((category) => (
            <Category
              key={category.id}
              href={`?category=${category.name}&search=${search}`}
              onClick={(e) => e.stopPropagation()}
              name={category.name}
            />
          ))}
        </div>
        <h3 className="mb-2 text-lg font-extrabold dark:text-white">
          <Link href={`/${props.slug}`} prefetch>
            {props.title}
          </Link>
        </h3>
        <p className="text-gray-600">
          <Link href={`/${props.slug}`} prefetch>
            {props.excerpt && props.excerpt.slice(0, Number(SUMMARY_LENGTH))}
          </Link>
        </p>
      </div>
    </article>
  );
}
