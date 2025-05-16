// IMPORTS
import Image from "next/image";

// INTERFACE
import { PropsCategory } from "@/types/category";
import SkeletonCategoryCard from "./skeletons/skeletonCategory";
import Link from "next/link";

interface IProps {
  categories: PropsCategory[];
  isLoading: boolean;
}

export default function Categories({ categories, isLoading }: IProps) {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Categorias</h1>
      <div className="flex gap-4 overflow-x-auto whitespace-nowrap w-full pb-2 2xl:justify-center">
        {isLoading ? (
          [...Array(3)].map((_, index) => (
            <SkeletonCategoryCard key={index} />
          ))
        ) : (
          categories?.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
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
            </Link>
          ))
        )}
      </div>
    </>
  );
}
