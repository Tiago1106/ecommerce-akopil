'use client'

// IMPORTS

// COMPONENTS
import Banner from "@/components/banner";
import { ProductCard } from "@/components/productCart";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/hooks/products/getAll";
import { getAllCategorysActives } from "@/hooks/categorys/getAllActives";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const LIMIT = 7;
export const useFetchProducts = (limit?: number) => {
  return useQuery({
    queryKey: ['products', limit],
    queryFn: () => getAllProducts(limit),
  });
};

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

      <div className="flex flex-col gap-4 w-full pb-4 items-center">
        <div className="flex flex-row gap-4 items-center">
          <h1 className="text-4xl font-bold w-full">Melhores produtos</h1>
          <Button className="w-fit">Ver todos</Button>
        </div>
        {/* Div com scroll horizontal e nowrap */}
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap w-full pb-2">
          {products?.map((product, index) => (
            <ProductCard
              key={index}
              image={product.images[0]}
              name={product.name}
              value={product.price}
              discountValue={product.discountPrice}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full pb-4 items-center">
        <h1 className="text-4xl font-bold">Categorias</h1>
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap w-full pb-2 items-center justify-center">
          {categories?.map((category) => (
            <div
              key={category.id}
              className="relative flex flex-col cursor-pointer md:w-[500px] w-[160px] shrink-0 md:h-[700px] h-[280px] rounded-lg overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h1 className="text-white text-xl md:text-3xl font-semibold text-center px-2">
                  {category.name}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}