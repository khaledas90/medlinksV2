import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { getProducts } from "@/actions/product";
import ProductCard from "@/components/common/ProductCard";
import NotFound from "@/components/NotFound";
import HeaderCategory from "./_components/HeaderCategory";
import Pagination from "@/components/common/Pagination";
import FillterProducts from "./_components/FillterProducts";
interface Props {
  params: Promise<{
    categoryId: string;
    locale: string;
  }>;
}

export default async function CategoryProductsPage({ params }: Props) {
  const { categoryId, locale } = await params;
  const products = await getProducts({
    categoryId: categoryId,
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderCategory
        productLength={products?.content?.length || 0}
        categoryId={Number(categoryId)}
        locale={locale}
      />
      <FillterProducts />
      <section className="py-12">
        <div className="container mx-auto px-4">
          {products?.content.length === 0 ? (
            <NotFound />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:mx-10 mx-1.5">
              {products?.content.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  locale={locale}
                />
              ))}
            </div>
          )}
        </div>
        <div className="mx-10 my-10">
          <Pagination
            paginationData={{
              pageNumber: products?.pageable.pageNumber ?? 0,
              pageSize: products?.pageable.pageSize ?? 0,
              totalElements: products?.totalElements ?? 0,
              totalPages: products?.totalPages ?? 0,
              numberOfElements: products?.numberOfElements ?? 0,
              size: products?.size ?? 0,
            }}
          />
        </div>
      </section>
    </div>
  );
}
