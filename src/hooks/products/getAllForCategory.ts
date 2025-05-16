import { api } from '@/lib/api';
import { PropsProduct } from '@/types/products';
import { SortOption } from '@/enums/sortOption.enum';

interface GetProductsByCategoryParams {
  categoryId: string;
  limit?: number;
  page?: number;
  sort?: SortOption;
}

interface ProductsByCategoryResponse {
  products: PropsProduct[];
  total: number;
  page: number;
  lastPage: number;
}

export const getProductsByCategory = async ({
  categoryId,
  limit = 20,
  page = 1,
  sort = SortOption.NAME_ASC,
}: GetProductsByCategoryParams): Promise<ProductsByCategoryResponse> => {
  const params = new URLSearchParams({
    limit: limit.toString(),
    page: page.toString(),
    sort,
  });

  const response = await api
    .get<ProductsByCategoryResponse>(`products/${categoryId}/products`, {
      searchParams: params,
    })
    .json();

  return response;
};