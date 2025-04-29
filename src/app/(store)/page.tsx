// IMPORTS

// COMPONENTS
import Banner from "@/components/banner";
import { productsMock } from "@/mock.tsx/products";
import { ProductCard } from "@/components/productCart";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Banner />

      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Melhores produtos</h1>
        <div className="flex flex-row gap-4">
          {productsMock.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              value={product.value}
              discountValue={product.discountValue}
            />
          ))}
        </div>
      </div>
    </div>
  );
}