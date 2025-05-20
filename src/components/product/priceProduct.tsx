
import { TagDiscount } from "@/components/tagDiscount";
import { formatToBRL } from "@/helpers/formatPrice";
import { Skeleton } from "../ui/skeleton";

interface PriceProductProps {
  originalPrice: number | undefined;
  discountPrice: number | undefined;
  isLoading: boolean;
}

export function PriceProduct({ originalPrice, discountPrice, isLoading }: PriceProductProps) {
  if (isLoading) {
    return (
      <div className="flex items-baseline gap-3">
        <Skeleton className="w-24 h-6" />
      </div>
    );
  }

  return (
    <div className="flex items-baseline gap-3">
      <span className="text-3xl font-extrabold">
        {formatToBRL(discountPrice ?? originalPrice ?? 0)}
      </span>

      {discountPrice &&
        discountPrice < (originalPrice ?? 0) && (
          <>
            <span className="text-lg text-gray-500 line-through">
              {formatToBRL(originalPrice ?? 0)}
            </span>
            <TagDiscount
              originalPrice={originalPrice}
              discountPrice={discountPrice}
            />
          </>
        )}
    </div>
  );
}