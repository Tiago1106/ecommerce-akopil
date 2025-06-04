import ProductPage from "@/components/product/productPage";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const productId = params.id

  return (
    <ProductPage id={productId} />
  );
}
