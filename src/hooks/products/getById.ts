import { api } from '@/lib/api';
import { PropsProduct } from '@/types/products';

export const getProductById = async (id: string): Promise<PropsProduct> => {
  const response = await api.get(`products/${id}`).json();

  return response as PropsProduct;
};