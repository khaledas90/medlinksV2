import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Category } from "@/actions/categories";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";

export default async function CategoryCard({
  category,
}: {
  category: Category;
}) {
  const t = await getTranslations("common.home");
  const locale = await getLocale();

  return (
    <div className="CategoryCard">
      <div key={category.id} className="animate-fade-in-up">
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="aspect-[1.5/1] relative overflow-hidden">
            <Link href={`/categories/${category.id}`}>
              <Image
                src={`https://mymedlinks.com/${category.imageUrl}`}
                loading="lazy"
                width={100}
                height={100}
                alt={category.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>

            <div className="absolute top-2 right-2">
              <Badge variant="default">
                {category.type === 1
                  ? t("product")
                  : category.type === 3
                  ? t("rent")
                  : t("service")}
              </Badge>
            </div>
          </div>
          <CardContent className="p-4">
            <Link href={`/categories/${category.id}`}>
              <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                {locale === "en" ? category.name : category.nameAr}
              </h4>
            </Link>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {locale == "en" ? category.description : category.descriptionAr}
            </p>

            <Link href={`/categories/${category.id}`}>
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                disabled={!category.active}
              >
                {category.type === 1
                  ? t("Explore Products")
                  : category.type === 3
                  ? t("Explore Rental Product")
                  : t("Contact for Price")}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
