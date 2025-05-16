import { api } from '@/lib/api';
import { PropsCategory } from '@/types/category';

export const getAllCategorysActives = async (): Promise<PropsCategory[]> => {
  const response = await api.get<PropsCategory[]>('categories/active').json();

  return response;
};