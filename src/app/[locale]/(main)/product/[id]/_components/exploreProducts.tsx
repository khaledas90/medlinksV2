import { Sparkles } from "lucide-react";
import ProductCard from "@/components/common/ProductCard";
import { getProducts } from "@/actions/product";
import { getTranslations } from "next-intl/server";

export default async function ExploreProducts({
  CategoryId,
  locale,
}: {
  CategoryId: number;
  locale: string;
}) {
  const Products = await getProducts({
    categoryId: String(CategoryId),
  });
  const t = await getTranslations("common.product");
  return (
    <section className={`py-16 bg-gradient-to-br from-gray-50 to-white  `}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-[#FF8C00]" />
            <h2 className="text-3xl font-bold text-gray-900">
              {t("exploreOtherProducts")}
            </h2>
            <Sparkles className="h-6 w-6 text-[#3ABFF8]" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t(
              "Discover more medical equipment and healthcare solutions from our comprehensive catalog"
            )}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3ABFF8] to-[#FF8C00] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {Products?.content.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
