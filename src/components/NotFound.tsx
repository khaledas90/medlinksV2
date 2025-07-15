import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <div className="mg:max-w-md w-full mx-auto">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#3ABFF8]/20 to-[#FF8C00]/20 rounded-full flex items-center justify-center animate-pulse">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <Search className="h-10 w-10 text-[#3ABFF8] animate-pulse" />
            </div>
          </div>

          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF8C00] rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3ABFF8] rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/2 -right-4 w-2 h-2 bg-green-500 rounded-full animate-ping delay-500"></div>
        </div>

        <div className="space-y-4 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-gray-700 animate-slide-in-left">
            No Products Found
          </h3>
          <p className="text-gray-500 text-lg animate-slide-in-right delay-300">
            We couldn't find any products matching your criteria
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 animate-fade-in-up delay-1000">
            <Button className="bg-[#3ABFF8] hover:bg-[#2DA5D8] text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105">
              Reset All Filters
            </Button>
            <Button
              variant="outline"
              className="border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Browse All Products
            </Button>
          </div>
          <div className="relative mt-12">
            <div className="flex justify-center space-x-8 opacity-30">
              <div className="w-12 h-12 bg-[#3ABFF8]/20 rounded-full animate-float"></div>
              <div className="w-8 h-8 bg-[#FF8C00]/20 rounded-full animate-float delay-500"></div>
              <div className="w-10 h-10 bg-green-500/20 rounded-full animate-float delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
