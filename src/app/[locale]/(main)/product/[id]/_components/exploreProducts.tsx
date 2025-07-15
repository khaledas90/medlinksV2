"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  nameAr: string;
  price: number;
  rent: number;
  discount: number;
  imagePath: string;
  category: string;
  categoryName: string;
  rating: number;
  reviews: number;
  availability: string;
  description: string;
}

// Sample products from different categories
const exploreProducts: Product[] = [
  {
    id: 24,
    name: "Digital Blood Pressure Monitor",
    nameAr: "جهاز قياس ضغط الدم الرقمي",
    price: 120,
    rent: 15,
    discount: 20,
    imagePath: "/placeholder.svg?height=300&width=300",
    category: "medical-equipment",
    categoryName: "Medical Equipment",
    rating: 4.7,
    reviews: 45,
    availability: "In Stock",
    description: "Accurate digital blood pressure monitor with large display.",
  },
  {
    id: 25,
    name: "Oxygen Concentrator",
    nameAr: "مركز الأكسجين",
    price: 850,
    rent: 85,
    discount: 10,
    imagePath: "/placeholder.svg?height=300&width=300",
    category: "respiratory-care",
    categoryName: "Respiratory Care",
    rating: 4.9,
    reviews: 32,
    availability: "In Stock",
    description: "High-quality oxygen concentrator for respiratory support.",
  },
  {
    id: 26,
    name: "Hospital Bed - Electric",
    nameAr: "سرير المستشفى الكهربائي",
    price: 1200,
    rent: 120,
    discount: 15,
    imagePath: "/placeholder.svg?height=300&width=300",
    category: "home-care",
    categoryName: "Home Care Equipment",
    rating: 4.6,
    reviews: 28,
    availability: "Limited Stock",
    description: "Adjustable electric hospital bed for home care.",
  },
  {
    id: 27,
    name: "ECG Machine - 12 Channel",
    nameAr: "جهاز تخطيط القلب 12 قناة",
    price: 2500,
    rent: 250,
    discount: 5,
    imagePath: "/placeholder.svg?height=300&width=300",
    category: "cardiac-care",
    categoryName: "Cardiac Care",
    rating: 4.8,
    reviews: 19,
    availability: "In Stock",
    description: "Professional 12-channel ECG machine for cardiac monitoring.",
  },
  {
    id: 28,
    name: "Walking Frame with Wheels",
    nameAr: "إطار المشي بالعجلات",
    price: 180,
    rent: 20,
    discount: 25,
    imagePath: "/placeholder.svg?height=300&width=300",
    category: "mobility-aids",
    categoryName: "Mobility Aids",
    rating: 4.4,
    reviews: 36,
    availability: "In Stock",
    description: "Lightweight walking frame with wheels for enhanced mobility.",
  },
  {
    id: 29,
    name: "Nebulizer Machine",
    nameAr: "جهاز البخاخ",
    price: 95,
    rent: 12,
    discount: 30,
    imagePath: "/placeholder.svg?height=300&width=300",
    category: "respiratory-care",
    categoryName: "Respiratory Care",
    rating: 4.5,
    reviews: 52,
    availability: "In Stock",
    description: "Compact nebulizer machine for respiratory treatments.",
  },
];

export default function ExploreProducts() {
  // Take only 6 products for display

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-gray-50 to-white  `}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-[#FF8C00]" />
            <h2 className="text-3xl font-bold text-gray-900">
              Explore Other Products
            </h2>
            <Sparkles className="h-6 w-6 text-[#3ABFF8]" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover more medical equipment and healthcare solutions from our
            comprehensive catalog
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3ABFF8] to-[#FF8C00] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {exploreProducts.map((product, index) => (
            <Card
              key={product.id}
              className="hover:shadow-xl transition-all duration-500 border-0 shadow-md group overflow-hidden hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={product.imagePath || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <Badge className="bg-white/90 text-gray-700 border border-gray-200 backdrop-blur-sm">
                    {product.categoryName}
                  </Badge>
                </div>

                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-red-500 text-white animate-pulse">
                      -{product.discount}%
                    </Badge>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Link href={`/products/${product.id}`}>
                      <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <CardHeader className="p-4">
                <CardTitle className="text-lg text-gray-900 line-clamp-2 group-hover:text-[#3ABFF8] transition-colors duration-300">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 line-clamp-1">
                  {product.nameAr}
                </CardDescription>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 transition-colors duration-300 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    ({product.rating})
                  </span>
                </div>

                {/* Pricing */}
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
                  {product.rent > 0 && (
                    <div className="text-sm text-gray-600">
                      Rent:{" "}
                      <span className="font-semibold text-green-600">
                        AED {product.rent}/month
                      </span>
                    </div>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#3ABFF8]/10 to-[#FF8C00]/10 rounded-2xl p-8 border border-[#3ABFF8]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need More Options?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Browse our complete catalog of medical equipment and healthcare
              solutions to find exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button className="bg-[#3ABFF8] hover:bg-[#2DA5D8] text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  Browse All Products
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  Contact for Custom Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
