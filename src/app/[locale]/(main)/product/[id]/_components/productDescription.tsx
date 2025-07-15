"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, User, ThumbsUp, MessageCircle } from "lucide-react";

interface ProductDescriptionProps {
  product: {
    description: string;
  };
}

export default function ProductDescription({
  product,
}: ProductDescriptionProps) {
  const [activeTab, setActiveTab] = useState("description");

  const sampleReviews = [
    {
      id: 1,
      user: "Ahmed M.",
      rating: 5,
      comment:
        "Excellent product quality and fast delivery. Highly recommended for home use.",
      date: "2024-01-15",
      helpful: 12,
    },
    {
      id: 2,
      user: "Sarah K.",
      rating: 4,
      comment:
        "Good value for money. The product works as expected and customer service was helpful.",
      date: "2024-01-10",
      helpful: 8,
    },
    {
      id: 3,
      user: "Mohammed A.",
      rating: 5,
      comment:
        "Professional grade equipment. Very satisfied with the purchase.",
      date: "2024-01-05",
      helpful: 15,
    },
  ];

  return (
    <Card className="border-2 border-[#3ABFF8]/20">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900">
          Product Details
        </CardTitle>
        <CardDescription>
          Comprehensive information about this product
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-100">
            <TabsTrigger
              value="description"
              className="data-[state=active]:bg-[#3ABFF8] data-[state=active]:text-white"
            >
              Description
            </TabsTrigger>

            <TabsTrigger
              value="features"
              className="data-[state=active]:bg-[#3ABFF8] data-[state=active]:text-white"
            >
              Features
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="data-[state=active]:bg-[#3ABFF8] data-[state=active]:text-white"
            >
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <div className="text-center">No features</div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {/* Reviews Summary */}
              <div className="bg-gradient-to-r from-[#3ABFF8]/10 to-[#FF8C00]/10 p-6 rounded-lg border border-[#3ABFF8]/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl font-bold text-gray-900">4.7</div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < 4
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      Based on {sampleReviews.length} reviews
                    </p>
                  </div>
                </div>
              </div>

              {/* Individual Reviews */}
              <div className="space-y-4">
                {sampleReviews.map((review) => (
                  <Card key={review.id} className="border border-gray-200">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#3ABFF8] rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {review.user}
                            </p>
                            <p className="text-sm text-gray-600">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">{review.comment}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <button className="flex items-center gap-1 hover:text-[#3ABFF8]">
                          <ThumbsUp className="h-4 w-4" />
                          Helpful ({review.helpful})
                        </button>
                        <button className="flex items-center gap-1 hover:text-[#3ABFF8]">
                          <MessageCircle className="h-4 w-4" />
                          Reply
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
