import CategoryClient from "@/components/category/categoryPage";

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return <CategoryClient categoryId={id} />;
}