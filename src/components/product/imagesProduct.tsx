import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
interface ImagesProductsProps {
  selectedImage: string;
  setSelectedImage: (image: string) => void;
  isLoading: boolean;
  images: string[];
}

export function ImagesProducts({ selectedImage, setSelectedImage, isLoading, images }: ImagesProductsProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="w-[600px] h-[600px] rounded-lg" />
        <div className="flex flex-row gap-4 overflow-x-auto max-w-[600px]">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="w-[100px] h-[100px] rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Image
        src={selectedImage}
        alt="Produto"
        width={500}
        height={500}
        className="object-cover rounded-lg"
      />
      <div className="flex flex-row gap-4 overflow-x-auto max-w-[600px]">
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt="Miniatura"
            width={100}
            height={100}
            onClick={() => setSelectedImage(image)}
            className={`object-cover rounded-lg cursor-pointer border-2 ${selectedImage === image ? "border-black" : "border-transparent"}`}
          />
        ))}
      </div>
    </div>
  );
}