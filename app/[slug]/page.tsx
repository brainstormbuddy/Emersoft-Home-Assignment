import { Metadata } from "next";
import { notFound } from "next/navigation";
import Category from "@/components/Category";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { CATEGORY_PARAM_KEY, FALLBACK_LARGE_IMAGE_URL } from "@/config/constants.config";
import { POSTS_ENDPOINT } from "@/config/endpoints.config";
import { TPost } from "@/types/post.type";

async function getData(slug: string): Promise<TPost> {
  const res = await fetch(`${POSTS_ENDPOINT}/${slug}`);

  return res.json();
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const post = await getData(slug);

  return {
    title: post?.title || "Emersoft Post - Not found",
    description: post?.excerpt || "Not found",
    openGraph: {
      images: [...(post ? [post?.imageUrl] : [])],
    },
  };
}

export default async function Post({ params: { slug } }: Props) {
  const post = await getData(slug);

  if (!post) notFound();

  return (
    <article className="container flex flex-col items-center">
      <div className="relative w-full h-[400px]  mb-8">
        <ImageWithFallback
          className="object-cover"
          priority
          src={post.imageUrl}
          alt="Post Main Image"
          fallback={FALLBACK_LARGE_IMAGE_URL}
          fill
        />
      </div>
      <div className="flex my-2 gap-4">
        {post.categoriesData?.map((category) => (
          <Category
            key={category.id}
            href={`/?${CATEGORY_PARAM_KEY}=${category.name}`}
            name={category.name}
          />
        ))}
      </div>
      <h1 className="text-4xl mb-4 dark:text-white">{post.title}</h1>
      <p className="text-gray-600 self-start">{post.excerpt}</p>
    </article>
  );
}
