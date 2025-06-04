import CategoryClient from "@/components/category/categoryPage";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const categoryId = params.id

  return (
    <CategoryClient categoryId={categoryId} />
  );
}
