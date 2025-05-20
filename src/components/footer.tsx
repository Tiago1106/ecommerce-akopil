'use client'

// IMPORTS  
import { useQuery } from "@tanstack/react-query";

// HOOKS
import { getAllCategorysActives } from "@/hooks/categorys/getAllActives";
import Link from "next/link";

export const useFetchCategorys = () => {
  return useQuery({
    queryKey: ['categorys'],
    queryFn: () => getAllCategorysActives(),
  });
};

export function Footer() {
  const { data: categorys } = useFetchCategorys();

  return (
    <footer className="bg-ring text-primary-foreground py-10 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sobre a loja */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Sobre nós</h2>
          <p className="text-sm">
            Somos uma loja comprometida com qualidade, bom atendimento e os melhores produtos para você.
          </p>
        </div>

        {/* Links úteis */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Categorias</h2>
          <ul className="text-sm space-y-2">
            {categorys?.map((category) => (
              <li key={category.id}>
                <Link href={`/category/${category.id}`} passHref className="hover:underline">
                  {category.name}
                </Link></li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contato</h2>
          <ul className="text-sm space-y-2">
            <li>Email: useakopil@gmail.com</li>
            <li>WhatsApp: (16) 99389-4218</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground mt-8 pt-4 text-center text-sm text-primary-foreground">
        © {new Date().getFullYear()} Akopil. Todos os direitos reservados.
      </div>
    </footer>
  );
}