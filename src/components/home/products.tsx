// IMPORTS
import { PropsProduct } from "@/types/products";

// COMPONENTS
import { Button } from "../ui/button";
import { ProductCard } from "./productCart";

interface IProps {
  products: PropsProduct[];
}

export default function Products({ products }: IProps) {
  return (
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
  );
}
