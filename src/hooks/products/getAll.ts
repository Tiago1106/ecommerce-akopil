import { api } from '@/lib/api';
import { PropsProduct } from '@/types/products';

export const getAllProducts = async (limit?: number): Promise<PropsProduct[]> => {
  const response = await api.get('products', {
    searchParams: limit ? { limit: limit.toString() } : undefined
  }).json();

  return response as PropsProduct[];
};