import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Category } from "@/actions/categories";  
import { getLocale, getTranslations } from 'next-intl/server';

export default async function CategoryCard({category}:{category:Category}) {
 const t = await getTranslations('common.home');
 const locale = await getLocale();
 

  return (
    <div className="CategoryCard">
      <div key={category.id} className="animate-fade-in-up">
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="aspect-square relative overflow-hidden">
            <img
              src={`https://mymedlinks.com/${category.imageUrl}`}
              loading="lazy" 
              width={100} 
              height={100}
              alt={category.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-2 right-2">
              <Badge variant="default">
                {category.type === 1 ? t("product") : category.type === 3 ? t("rent") :  t("service") }
              </Badge>
            </div>
          </div>
          <CardContent className="p-4">
            <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">
              {locale === 'en' ? category.name : category.nameAr}
            </h4>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {locale== 'en'? category.description : category.descriptionAr}
            </p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-lg font-bold text-blue-600">
                 {t("Rate for")} {category.type === 1 ? t("product") : category.type === 3 ? t("rent") : t("service")}:
              </span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < 4 ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              disabled={!category.active}
            >
              {category.type === 1 ? t("Buy Now") : category.type === 2 ? t("Rent Now") : t("Contact for Price")}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}