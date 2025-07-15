import { getAllCategory } from "@/actions/categories";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function HeaderCategory({
  productLength,
  categoryId,
  locale,
}: {
  productLength: number;
  categoryId: number;
  locale: string;
}) {
  const category = await getAllCategory();
  const t = await getTranslations("common.product");
  const categorySpesific = category?.find(
    (category) => category.id === categoryId
  );

  return (
    <section className="bg-white py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Link href={"/"}>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-[#3ABFF8] hover:bg-gray-100 mb-4 p-2"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                {t("Go Back")}
              </Button>
            </Link>
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-gray-900">
                {locale == "en"
                  ? categorySpesific?.name
                  : categorySpesific?.nameAr}
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                {locale == "en"
                  ? categorySpesific?.description
                  : categorySpesific?.descriptionAr}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <Badge className="bg-[#3ABFF8]/10 text-[#3ABFF8] border border-[#3ABFF8]/20">
                  {productLength} {t("Products Available")}
                </Badge>
                <Badge className="bg-green-100 text-green-800 border border-green-200">
                  ✓ {t("Quality Assured")}
                </Badge>
                <Badge className="bg-orange-100 text-orange-800 border border-orange-200">
                  📦 {t("Fast Delivery")}
                </Badge>
              </div>
            </div>
          </div>
          <div className="hidden lg:block ml-8 mt[35px]">
            <div className="w-32 h-32 bg-gradient-to-br from-[#3ABFF8]/20 to-[#FF8C00]/20 rounded-2xl flex items-center justify-center border border-[#3ABFF8]/20">
              <div className="text-6xl">
                <Image
                  src={`https://mymedlinks.com/${categorySpesific?.imageUrl}`}
                  alt={
                    (locale == "en"
                      ? categorySpesific?.name
                      : categorySpesific?.nameAr) || "categort"
                  }
                  className="object-cover"
                  width={128}
                  height={158}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
