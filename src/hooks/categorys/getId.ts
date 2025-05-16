import { api } from '@/lib/api';
import { PropsCategory } from '@/types/category';

export const getCategoryById = async (id: string): Promise<PropsCategory> => {
  const response = await api.get<PropsCategory>(`categories/${id}`).json();

  return response;
};