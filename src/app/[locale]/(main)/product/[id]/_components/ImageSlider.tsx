"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductImageSliderProps {
  images: { path: string }[];
  productName: string;
}

export default function ImageSlider({
  images,
  productName,
}: ProductImageSliderProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: productName,
        text: `Check out this ${productName}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Product link copied to clipboard!");
    }
  };
  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative group">
        <div className="aspect-square bg-white rounded-2xl border-2 border-[#3ABFF8]/20 p-6 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={
                `https://mymedlinks.com/${images[currentImage].path}` ||
                "/placeholder.svg"
              }
              alt={`${productName} - Image ${currentImage + 1}`}
              fill
              className={`object-contain transition-transform duration-500 ${
                isZoomed ? "scale-150" : "scale-100"
              }`}
              priority
            />
            <div
              className="absolute inset-0 cursor-zoom-in"
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>
        </div>
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsZoomed(!isZoomed)}
            className="bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>

          {productName && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all duration-300 ${
                index === currentImage
                  ? "border-[#3ABFF8] ring-2 ring-[#3ABFF8]/30"
                  : "border-gray-200 hover:border-[#3ABFF8]/50"
              }`}
            >
              <Image
                src={
                  `https://mymedlinks.com/${image.path}` || "/placeholder.svg"
                }
                alt={`${productName} thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
