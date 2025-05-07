'use client'

// IMPORTS
import { useQuery } from "@tanstack/react-query";

// COMPONENTS
import Banner from "@/components/home/banner";
import Products from "@/components/home/products";
import Categories from "@/components/home/categories";

// HOOKS
import { getAllProducts } from "@/hooks/products/getAll";
import { getAllCategorysActives } from "@/hooks/categorys/getAllActives";

// FETCH PRODUCTS
const LIMIT = 7;
export const useFetchProducts = (limit?: number) => {
  return useQuery({
    queryKey: ['products', limit],
    queryFn: () => getAllProducts(limit),
  });
};

// FETCH CATEGORYS
export const useFetchCategorys = () => {
  return useQuery({
    queryKey: ['categorys'],
    queryFn: () => getAllCategorysActives(),
  });
};

export default function Page() {
  const { data: products } = useFetchProducts(LIMIT);
  const { data: categories } = useFetchCategorys();

  return (
    <div className="flex flex-col gap-8 p-4">
      <Banner />
      <Products products={products || []} />
      <Categories categories={categories || []} />
    </div>
  );
}