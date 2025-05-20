import ProductPage from "@/components/product/productPage";

interface PageProps {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: PageProps) {
  const productId = params.id

  return (
    <ProductPage id={productId} />
  );
}
