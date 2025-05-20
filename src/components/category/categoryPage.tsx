'use client'

import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "@/hooks/categorys/getId";
import { getProductsByCategory } from "@/hooks/products/getAllForCategory";
import { SortOption } from "@/enums/sortOption.enum";
import { PropsProduct } from "@/types/products";
import { ProductCard } from "../productCart";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";

interface Props {
  categoryId: string;
}

export const useFetch = (categoryId: string, limit = 20, page = 1, sort = SortOption.NAME_ASC) => {
  return useQuery({
    queryKey: ['category', categoryId, page, sort],
    queryFn: async () => {
      const [category, products] = await Promise.all([
        getCategoryById(categoryId),
        getProductsByCategory({ categoryId, limit, page, sort }),
      ]);
      return { category, products };
    },
    enabled: !!categoryId,
  })
}

export default function CategoryClient({ categoryId }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sort, setSort] = useState<SortOption>(SortOption.NAME_ASC);
  const [accumulatedProducts, setAccumulatedProducts] = useState<PropsProduct[]>([]);

  const { data, isLoading, error, isFetching } = useFetch(categoryId, 20, currentPage, sort);

  useEffect(() => {
    setCurrentPage(1);
    setAccumulatedProducts([]);
  }, [sort, categoryId]);

  useEffect(() => {
    if (data?.products?.products) {
      setAccumulatedProducts(prev => {
        if (currentPage === 1) return data.products.products;
        const newProducts = data.products.products.filter(p => !prev.some(pr => pr.id === p.id));
        return [...prev, ...newProducts];
      });
    }
  }, [data?.products.products, currentPage]);

  if (error) return <div>Erro ao carregar dados</div>;

  const lastPage = data?.products.lastPage || 1;

  const handleShowMore = () => {
    if (currentPage < lastPage) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="text-center bg-sidebar-ring rounded-lg p-4 h-16">
        {isLoading && currentPage === 1 ? null : (
          <motion.h1
            className="text-2xl md:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {data?.category?.name}
          </motion.h1>
        )}
      </div>

      {/* Filtro de ordenação */}
      <div className="flex justify-end">
        <Select
          value={sort}
          onValueChange={(value) => {
            setSort(value as SortOption);
          }}
        >
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={SortOption.NAME_ASC}>Nome A-Z</SelectItem>
            <SelectItem value={SortOption.NAME_DESC}>Nome Z-A</SelectItem>
            <SelectItem value={SortOption.PRICE_ASC}>Menor preço</SelectItem>
            <SelectItem value={SortOption.PRICE_DESC}>Maior preço</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Produtos */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {accumulatedProducts.map((product: PropsProduct) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.images[0]}
            name={product.name}
            value={product.price}
            discountValue={product.discountPrice}
            width={250}
            height={375}
          />
        ))}
      </div>

      {/* Botão mostrar mais */}
      {currentPage < lastPage && (
        <div className="flex justify-center mt-4">
          <Button
            onClick={handleShowMore}
            disabled={isFetching}
            className="bg-black text-white px-6 py-2 rounded hover:bg-opacity-80 transition disabled:opacity-50"
          >
            {isFetching ? 'Carregando...' : 'Mostrar mais'}
          </Button>
        </div>
      )}
    </div>
  );
}
