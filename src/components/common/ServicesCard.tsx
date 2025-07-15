import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";

export interface CategoryService {
  categoryId: number;
  categoryTypeId: number;
  discount: number;
  id: number;
  imagePath: string;
  name: string;
  nameAr: string;
  price: number;
  rent: number;
  description?: string;
}

export default function ServicesCard({
  service,
  index,
}: {
  service: CategoryService;
  index: number;
}) {
  const t = useTranslations("common.home");
  const hasDiscount = service.discount > 0;
  const displayPrice = service.price > 0 ? service.price : service.rent;
  const originalPrice = hasDiscount
    ? displayPrice / (1 - service.discount / 100)
    : null;
  if (!service) return null;

  return (
    <div
      className={clsx(
        "animate-fade-in-up",
        "transition-all duration-500 hover:-translate-y-2"
      )}
      style={{
        animationDelay: `${index * 150}ms`,
        animationFillMode: "both",
      }}
    >
      <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg bg-white">
        <div className="aspect-[1.5/1] relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
          <Image
            src={`https://mymedlinks.com/${service.imagePath}`}
            alt={service.name}
            fill
            className="object-contain object-center group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {hasDiscount && (
            <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-1 text-sm">
              -{service.discount}%
            </Badge>
          )}

          {service.price !== 0 && (
            <Badge
              variant="secondary"
              className="absolute top-3 left-3 bg-white/90 text-gray-700 font-medium"
            >
              {t("Book Now")}
            </Badge>
          )}
        </div>

        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
              {service.name}
            </h3>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-sm text-gray-500 ml-2">(4.8)</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {service.description ||
              t(
                "Professional medical service with trained attendants providing quality care and support"
              )}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{t("24/7 Available")}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{t("Certified")}</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ${displayPrice}
                  </span>
                  {originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ${originalPrice.toFixed(0)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  {service.price > 0
                    ? t("One-time payment")
                    : t("Per day rental")}
                </p>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-[#35ace0] to-[#35ace0] hover:from-[#35ace0] hover:to-[#35ace0] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
              {t("Book Now")}
            </Button>
          </div>
        </CardContent>

        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Card>
    </div>
  );
}
