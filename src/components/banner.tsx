// IMPORTS

import { Button } from "@/components/ui/button";
import Image from "next/image";

// COMPONENTS

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
        <div className="">
          <Image
            src="https://res.cloudinary.com/duvoti4ou/image/upload/v1746575999/foto1_cei2hq.jpg"
            alt="Foto 1"
            width={300}
            height={500}
            loading="lazy"
            className="object-cover rounded-lg h-125"
          />
        </div>

        {/* Duas fotos menores (uma em cima da outra) */}
        <div className="flex flex-col justify-between">
          <div className="">
            <Image
              src="https://res.cloudinary.com/duvoti4ou/image/upload/v1746575999/foto2_iaymof.jpg"
              alt="Foto 2"
              width={300}
              height={250}
              className="object-cover rounded-lg h-60"
            />
          </div>
          <div className="">
            <Image
              src="https://res.cloudinary.com/duvoti4ou/image/upload/v1746575999/foto3_mj5gku.jpg"
              alt="Foto 3"
              width={300}
              height={250}
              className="object-cover rounded-lg h-60"
            />
          </div>
        </div>
      </div>

    </div>
  );
}