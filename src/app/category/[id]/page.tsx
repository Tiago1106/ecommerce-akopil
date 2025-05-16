import CategoryClient from "@/components/category/categoryPage";

interface PageProps {
  params: {
    id: string;
  };
}

export default function CategoryPage({ params }: PageProps) {
  const categoryId = params.id

  return (
    <CategoryClient categoryId={categoryId} />
  );
}
