import { PropsCategory } from "./category";

export interface PropsProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice: number;
  quantity: number;
  images: string[];
  createdAt: string; // ou Date se você quiser transformar com `new Date(...)`
  updatedAt: string;
  categories: PropsCategory[];
}