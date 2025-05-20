'use client';

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getProductById } from "@/hooks/products/getById";

import { Button } from "@/components/ui/button";

import { ImagesProducts } from "./imagesProduct";
import { PriceProduct } from "./priceProduct";
import { AccordionDescription } from "./accordionDescription";
import { Skeleton } from "../ui/skeleton";

export const useFetch = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  });
}

interface Props {
  id: string;
}

export default function ProductPage({ id }: Props) {
  const { data, isLoading } = useFetch(id);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (data?.images?.length) {
      setSelectedImage(data.images[0]);
    }
  }, [data?.images])

  return (
    <div className="flex flex-col items-center pt-3">
      <div className="flex flex-row gap-8 justify-center md:px-8 flex-wrap max-w-6xl mb-16">
        <ImagesProducts
          selectedImage={selectedImage || ''}
          setSelectedImage={setSelectedImage}
          images={data?.images || []}
          isLoading={isLoading}
        />
        <div className="flex-1 flex flex-col gap-6">
          {isLoading ? (
            <Skeleton className="w-full h-10" />
          ) : (
            <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>
          )}
          <PriceProduct
            originalPrice={data?.price}
            discountPrice={data?.discountPrice}
            isLoading={isLoading}
          />
          <AccordionDescription
            description={data?.description}
            isLoading={isLoading}
          />
          <div className="flex flex-col">
            {isLoading ? (
              <Skeleton className="w-full h-10" />
            ) : (
              <Button variant="default">Adicionar ao carrinho</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}