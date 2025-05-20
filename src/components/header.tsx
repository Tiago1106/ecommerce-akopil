"use client";

// IMPORTS
import Link from "next/link";
import { ShoppingCart, Heart, User, Menu } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// COMPONENTS
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

// HOOKS
import { getAllCategorysActives } from "@/hooks/categorys/getAllActives";

// FETCH CATEGORYS
const useFetchCategorys = () => {
  return useQuery({
    queryKey: ['categorys'],
    queryFn: () => getAllCategorysActives(),
  });
};

export function Header() {
  const { data: categorys } = useFetchCategorys();

  return (
    <header className="flex items-center justify-between h-16 w-full border-b border-border-secondary border-dashed fixed top-0 left-0 right-0 z-50 bg-background-header px-4">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-primary">
        AKOPIL
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex flex-row items-center gap-4 flex-1 px-4">
        {categorys?.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`} passHref>
            <Button asChild variant="ghost">
              <span>{category.name}</span>
            </Button>
          </Link>
        ))}
      </nav>

      {/* Search and Icons */}
      <div className="flex items-center gap-4">
        {/* <Input type="text" placeholder="Procurar produto..." className="hidden lg:block" /> */}
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Heart className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
        </Button>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col gap-6 p-6">
            <Link href="/" className="text-2xl font-bold text-primary">
              AKOPIL
            </Link>
            <div className="flex flex-col gap-4">
              {categorys?.map((category) => (
                <Button variant="ghost" className="justify-start" key={category.id}>
                  {category.name}
                </Button>
              ))}
              {/* <Input
                type="text"
                placeholder="Procurar produto..."
                className="mt-4"
              /> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}