import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonProductCard() {
  return (
    <div className="flex flex-col gap-2 md:w-[500px] w-[160px] shrink-0">
      <Skeleton className="md:w-[500px] md:h-[700px] w-[160px] h-[280px] rounded-lg" />
      <Skeleton className="h-6 w-3/4" />
      <div className="flex gap-2">
        <Skeleton className="h-5 w-1/3" />
        <Skeleton className="h-5 w-1/3" />
      </div>
    </div>
  );
}