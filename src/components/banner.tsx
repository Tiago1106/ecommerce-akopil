// IMPORTS
import Image from "next/image";

// COMPONENTS
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

      {/* Texto à esquerda */}
      <div className="flex-1 flex flex-col gap-4 md:items-center">
        <h1 className="text-4xl font-bold">Bem-vindo à nossa loja!</h1>
        <p className="text-lg text-muted-foreground">
          Explore nossa coleção exclusiva de produtos. Estilo e qualidade em cada detalhe.
        </p>
        <Button className="w-fit">
          Ver catálogo
        </Button>
      </div>

      {/* Fotos à direita */}
      <div className="flex flex-row gap-4">
        {/* Foto esquerda (grande) */}
        <div className="md:w-[400px] md:h-[700px] w-[200px] h-[350px]">
          <Image
            src="https://res.cloudinary.com/duvoti4ou/image/upload/v1746575999/foto1_cei2hq.jpg"
            alt="Foto 1"
            width={400}
            height={700}
            loading="lazy"
            className="object-cover rounded-lg h-[350px] w-[200px] md:w-[400px] md:h-[700px]"
          />
        </div>

        {/* Duas fotos menores (uma em cima da outra) */}
        <div className="flex flex-col justify-between">
          <div className="w-[200px] h-[170px] md:w-[400px] md:h-[345px]">
            <Image
              src="https://res.cloudinary.com/duvoti4ou/image/upload/v1746575999/foto2_iaymof.jpg"
              alt="Foto 2"
              width={400}
              height={345}
              className="object-cover rounded-lg h-[170px] w-[200px] md:w-[400px] md:h-[345px]"
            />
          </div>
          <div className="w-[200px] h-[170px] md:w-[400px] md:h-[345px]">
            <Image
              src="https://res.cloudinary.com/duvoti4ou/image/upload/v1746575999/foto3_mj5gku.jpg"
              alt="Foto 3"
              width={400}
              height={345}
              className="object-cover rounded-lg h-[170px] w-[200px] md:w-[400px] md:h-[345px]"
            />
          </div>
        </div>
      </div>

    </div>
  );
}