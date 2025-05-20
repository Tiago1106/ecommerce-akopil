import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  value: number;
  discountValue?: number;
  width?: number;
  height?: number;
}

export function ProductCard({ id, image, name, value, discountValue, width = 250, height = 375 }: ProductCardProps) {
  return (
    <Link href={`${id}/p`} className={`flex flex-col gap-2 cursor-pointer w-[160px] md:w-[${width}px] shrink-0`}>
      <div className={`flex flex-col gap-2 cursor-pointer w-[160px] md:w-[${width}px] shrink-0`}>
        <Image
          src={image}
          alt={name}
          width={width}
          height={height}
          loading="lazy"
          className={`object-cover rounded-lg w-[160px] h-[280px] md:w-[${width}px] md:h-[${height}px]`}
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
    </Link>
  );
}