import { notFound } from "next/navigation";
import ImageSlider from "./_components/ImageSlider";
import ProductInfo from "./_components/productInfo";
import OrderForm from "./_components/orderForm";
import ProductDescription from "./_components/productDescription";
import { getProductById } from "@/actions/product";
import ExploreProducts from "./_components/exploreProducts";

interface Props {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { id, locale } = await params;
  const product = await getProductById({ productId: Number(id) });

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen ">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="lg:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4 my-3.5">
                <ImageSlider
                  images={product.images}
                  productName={product.name}
                />
                <ProductInfo product={product} />
              </div>
              <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                  <ProductDescription
                    product={{
                      description: product.description,
                    }}
                  />
                </div>
              </section>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-4">
                <OrderForm product={product} />
              </div>
            </div>
          </div>
          <ExploreProducts CategoryId={product.categoryId} locale={locale} />
        </div>
      </section>
    </div>
  );
}
