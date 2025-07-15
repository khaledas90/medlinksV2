import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Product } from "@/actions/product";

export default function ProductCard({
  product,
  locale,
}: {
  product: Product;
  locale: string;
}) {
  const calculateDiscountedPrice = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };
  return (
    <div className="ProductCard">
      <Card
        key={product.id}
        className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-md group overflow-hidden rounded-xl"
      >
        <div className="relative">
          <div className="aspect-[1.5/1] bg-gray-100 overflow-hidden">
            <Link href={`/product/${product.id}`}>
              <Image
                src={`https://mymedlinks.com/${product.imagePath}`}
                alt={locale == "en" ? product.name : product.nameAr}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </Link>
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {product.discount > 0 && (
              <Badge className="bg-red-500 text-white animate-fade-in">
                -{product.discount}%
              </Badge>
            )}
            {product.rent > 0 && (
              <Badge className="bg-blue-500 text-white animate-fade-in delay-150">
                Rentable
              </Badge>
            )}
          </div>
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-lg text-gray-900 line-clamp-1 transition-colors duration-300 group-hover:text-[#FF8C00]">
            <Link href={`/product/${product.id}`}>
              {locale == "en" ? product.name : product.nameAr}
            </Link>
          </CardTitle>
          <div className="flex items-center gap-1 mb-2 animate-fade-in">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 transition-all duration-300 ${
                  i < Math.floor(product.rating || 4)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {product.discount > 0 ? (
                <>
                  <span className="text-xl font-bold text-[#3ABFF8]">
                    AED{" "}
                    {calculateDiscountedPrice(
                      product.price,
                      product.discount
                    ).toFixed(0)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    AED {product.price}
                  </span>
                </>
              ) : (
                <span className="text-xl font-bold text-[#3ABFF8]">
                  AED {product.price}
                </span>
              )}
            </div>
            {product.categoryTypeId === 3 && (
              <div className="text-sm text-gray-600">
                Rent:{" "}
                <span className="font-semibold text-green-600">
                  AED {product.rent}/month
                </span>
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-4 my-1 pt-0 space-y-2">
          <div className="flex py-2 gap-2">
            {product.categoryTypeId === 3 ? (
              <Link href={`/product/${product.id}`} className="w-full flex">
                <Button
                  variant="outline"
                  className="flex-1 border-green-500 text-green-600 hover:bg-green-500 hover:text-white bg-transparent text-sm transition-all duration-300"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Rent
                </Button>
              </Link>
            ) : (
              <Link href={`/product/${product.id}`} className="w-full flex">
                <Button
                  variant="outline"
                  className="flex-1 border-[#3ABFF8] text-[#3ABFF8] hover:bg-[#3ABFF8] hover:text-black bg-transparent text-sm transition-all duration-300"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Buy
                </Button>
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
