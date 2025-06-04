
import ProductPageComponent from "@/components/product/productPage";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <ProductPageComponent id={id} />;
}