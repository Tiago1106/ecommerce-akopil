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
import { PropsProduct } from "@/types/products";
import { PropsCategory } from "@/types/category";

// FETCHS
const LIMIT = 7;
export const useFetch = () => {
  return useQuery({
    queryKey: ['products-and-categorys', LIMIT],
    queryFn: async () => {
      const [products, categories] = await Promise.all([
        getAllProducts(LIMIT),
        getAllCategorysActives(),
      ]);
      return { products, categories };
    },
  });
};

export default function Page() {
  const { data, isLoading, error } = useFetch();
  
  if (error) return <div>Erro ao carregar dados</div>;  

  const { products, categories } = data as { products: PropsProduct[], categories: PropsCategory[] };

  return (
    <div className="flex flex-col gap-8 p-4">
      <Banner />
      <Products products={products || []} isLoading={isLoading} />
      <Categories categories={categories || []} isLoading={isLoading} />
    </div>
  );
}