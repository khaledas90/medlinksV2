"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  ShoppingCart,
  CreditCard,
  Truck,
  Shield,
  Award,
  Clock,
} from "lucide-react";
import { Product } from "@/actions/product";

export default function ProductInfo({ product }: { product: Product }) {
  const discountedPrice = product.price
    ? product.price
    : product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const savings = product.price ? product.price - product.price : 0;

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

      {/* Pricing */}
      <div className="space-y-3">
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold text-[#3ABFF8]">
            AED {discountedPrice.toLocaleString()}
          </span>
          {product.price && (
            <span className="text-xl text-gray-500 line-through">
              AED {product.price.toLocaleString()}
            </span>
          )}
          {product.discount && (
            <Badge className="bg-red-500 text-white">
              -{product.discount}% OFF
            </Badge>
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
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Truck className="h-5 w-5 text-[#3ABFF8]" />
          <div>
            <p className="font-medium text-gray-900 text-sm">Free Delivery</p>
            <p className="text-xs text-gray-600">Within UAE</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Shield className="h-5 w-5 text-green-600" />
          <div>
            <p className="font-medium text-gray-900 text-sm">Warranty</p>
            <p className="text-xs text-gray-600">1 Year</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Award className="h-5 w-5 text-purple-600" />
          <div>
            <p className="font-medium text-gray-900 text-sm">Quality</p>
            <p className="text-xs text-gray-600">Certified</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Clock className="h-5 w-5 text-orange-600" />
          <div>
            <p className="font-medium text-gray-900 text-sm">Support</p>
            <p className="text-xs text-gray-600">24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
}
