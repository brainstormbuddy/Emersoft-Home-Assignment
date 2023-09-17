"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Input from "./Input";
import Dropdown from "./Dropdown";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useDebounce } from "@/hooks/useDebounce";
import { setQueryParam } from "@/helpers/queryParams.helper";
import { CATEGORY_PARAM_KEY, SEARCH_PARAM_KEY } from "@/config/constants.config";
import { TCategory } from "../types/category.type";

interface Props {
  categories: TCategory[];
}

export default function FilterGroup({ categories }: Props) {
  const debounce = useDebounce();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get(SEARCH_PARAM_KEY) || "";
  const category = searchParams.get(CATEGORY_PARAM_KEY) || "";

  const setSearch = (value: string) => {
    debounce(() => {
      setQueryParam(SEARCH_PARAM_KEY, value, router, searchParams, "replace");
    }, 300);
  };

  const setCategory = (value: string) => {
    setQueryParam(CATEGORY_PARAM_KEY, value, router, searchParams, "push");
  };

  return (
    <section className="flex container flex-col items-center justify-center gap-4 md:gap-8 md:flex-row mb-8">
      <Input
        className="w-full max-w-[400px] md:w-[250px]"
        defaultValue={search}
        onChange={setSearch}
        placeholder="Search by title"
        leading={<MagnifyingGlassIcon className="w-6 h-6" color="black" />}
      />
      <Dropdown
        className="w-full max-w-[400px] md:w-[250px]"
        selected={category}
        setSelected={setCategory}
        options={categories.map((category) => category.name)}
        placeholder="Filter by Category"
      />
    </section>
  );
}
