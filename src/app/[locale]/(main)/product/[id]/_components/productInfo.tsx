"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Truck, Shield, Award, Clock } from "lucide-react";
import { Product } from "@/actions/product";

function InfoBox({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
      {icon}
      <div>
        <p className="font-medium text-gray-900 text-sm">{title}</p>
        <p className="text-xs text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}

export default function ProductInfo({ product }: { product: Product }) {
  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice = hasDiscount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  const savings = hasDiscount ? product.price - discountedPrice : 0;

  return (
    <div className="space-y-6">
      <Badge
        variant="secondary"
        className="bg-[#3ABFF8]/10 text-[#3ABFF8] border border-[#3ABFF8]/20"
      >
        {product.active ? "Active" : "Inactive"}
      </Badge>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">
          {product.name}
        </h1>
        {product.nameAr && (
          <p className="text-lg text-gray-600 font-medium">{product.nameAr}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-lg font-medium text-gray-900">
          {product.rating}
        </span>
      </div>

      <Separator />

      <div className="space-y-3">
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold text-[#3ABFF8]">
            AED {discountedPrice.toLocaleString()}
          </span>
          {hasDiscount ? (
            <>
              <span className="text-xl text-gray-500 line-through">
                AED {product.price.toLocaleString()}
              </span>
              <Badge className="bg-red-500 text-white">
                -{product.discount}% OFF
              </Badge>
            </>
          ) : (
            ""
          )}
        </div>
        {savings > 0 && (
          <p className="text-green-600 font-medium">
            You save AED {savings.toLocaleString()}
          </p>
        )}
      </div>

      <Separator />

      <div className="grid grid-cols-2 gap-4">
        <InfoBox
          icon={<Truck className="h-5 w-5 text-[#3ABFF8]" />}
          title="Free Delivery"
          subtitle="Within UAE"
        />
        <InfoBox
          icon={<Shield className="h-5 w-5 text-green-600" />}
          title="Warranty"
          subtitle="1 Year"
        />
        <InfoBox
          icon={<Award className="h-5 w-5 text-purple-600" />}
          title="Quality"
          subtitle="Certified"
        />
        <InfoBox
          icon={<Clock className="h-5 w-5 text-orange-600" />}
          title="Support"
          subtitle="24/7"
        />
      </div>
    </div>
  );
}
