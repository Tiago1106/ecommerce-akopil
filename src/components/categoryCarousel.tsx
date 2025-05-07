import React from 'react';

interface Category {
  id: string;
  name: string;
}

interface CarouselProps {
  categories: Category[];
}

export const CategoryCarousel: React.FC<CarouselProps> = ({ categories }) => {
  return (
    <div className="flex flex-col gap-4 px-4 w-full pb-4">
      <h1 className="text-4xl font-bold w-full text-start">Categorias</h1>
      <div className="flex overflow-x-auto gap-6 py-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex-none w-[200px] h-[100px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <span className="text-center text-xl font-semibold">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};