import { TCategory } from "@/types/category.type";

export const findCategory = (id: number, categories: TCategory[]) => {
  return categories.find((category) => category.id === id);
};

export const findCategories = (ids: number[], categories: TCategory[]) => {
  const result: TCategory[] = [];

  ids.forEach((id) => {
    const category = findCategory(id, categories);

    if (category) result.push(category);
  });

  return result;
};

export const getIdFromCategory = (categoryName: string, categories: TCategory[]) => {
  const category = categories.find((category) => category.name === categoryName);

  return category?.id;
};
