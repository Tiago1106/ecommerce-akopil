import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  value: number;
  discountValue?: number;
}

export function ProductCard({ image, name, value, discountValue }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-2 cursor-pointer md:w-[500px] w-[160px] shrink-0">
      <Image
        src={image}
        alt={name}
        width={500}
        height={700}
        loading="lazy"
        className="object-cover rounded-lg md:w-[500px] md:h-[700px] w-[160px] h-[280px]"
      />

      <h2 className="text-lg font-bold">{name}</h2>

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