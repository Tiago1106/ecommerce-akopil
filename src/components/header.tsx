"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, User, Menu } from "lucide-react";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="flex items-center justify-between h-16 w-full border-b border-border-secondary border-dashed fixed top-0 left-0 right-0 z-50 bg-background-header px-4">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-primary">
        AKOPIL
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex flex-row items-center gap-4 flex-1 px-4">
        <Button variant="ghost">Novidades</Button>
        <Button variant="ghost">Masculino</Button>
        <Button variant="ghost">Feminino</Button>
        <Button variant="ghost">Unissex</Button>
        <Button variant="ghost">Acessórios</Button>
        <Button variant="ghost">Outros</Button>
      </nav>

      {/* Search and Icons */}
      <div className="flex items-center gap-4">
        <Input type="text" placeholder="Procurar produto..." className="hidden lg:block" />
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
              <Button variant="ghost" className="justify-start">
                Novidades
              </Button>
              <Button variant="ghost" className="justify-start">
                Masculino
              </Button>
              <Button variant="ghost" className="justify-start">
                Feminino
              </Button>
              <Button variant="ghost" className="justify-start">
                Unissex
              </Button>
              <Button variant="ghost" className="justify-start">
                Acessórios
              </Button>
              <Button variant="ghost" className="justify-start">
                Outros
              </Button>
              <Input
                type="text"
                placeholder="Procurar produto..."
                className="mt-4"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}