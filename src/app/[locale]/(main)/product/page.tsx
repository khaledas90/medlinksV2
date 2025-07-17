import { Award, TrendingUp, Zap } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-[#3ABFF8] to-[#2DA5D8] py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Medical Equipment & Supplies
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover our comprehensive range of high-quality medical equipment
              for healthcare professionals and home care needs
            </p>
            {/* {urlSearchTerm && (
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-6 inline-block">
                <p className="text-white/90">
                  Showing results for:{" "}
                  <span className="font-semibold text-white">
                    "{urlSearchTerm}"
                  </span>
                </p>
              </div>
            )} */}
            <div className="flex flex-wrap justify-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>Quality Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>Best Prices</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
