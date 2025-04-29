import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  value: number;
  discountValue?: number;
}

export function ProductCard({ image, name, value, discountValue }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      {/* Imagem */}
      <Image
        src={image}
        alt={name}
        width={300}
        height={400}
        loading="lazy"
        className="object-cover rounded-lg h-100 w-full"
      />

      {/* Nome do produto */}
      <h2 className="text-lg font-bold">{name}</h2>

      {/* Preço */}
      <div className="flex items-center gap-2">
        {discountValue ? (
          <>
            <span className="text-muted-foreground line-through text-sm">
              R$ {value.toFixed(2)}
            </span>
            <span className="text-primary font-bold">
              R$ {discountValue.toFixed(2)}
            </span>
          </>
        ) : (
          <span className="text-primary font-bold">
            R$ {value.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
}