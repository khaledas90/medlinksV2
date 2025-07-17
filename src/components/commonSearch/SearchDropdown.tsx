"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Star, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "../common/ProductCard";

interface SearchDropdownProps {
  searchTerm: string;
  isOpen: boolean;
  onClose: () => void;
  onClear: () => void;
}

// Search Dropdown Component
export function SearchDropdown({
  searchTerm,
  isOpen,
  onClose,
  onClear,
}: SearchDropdownProps) {
  const [searchResults, setSearchResults] = useState<
    {
      name: string;
      nameAr: string;
      categoryName: string;
      description: string;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Search function with debouncing
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    const timer = setTimeout(() => {
      const filtered = [
        { name: "", nameAr: "", categoryName: "", description: "" },
      ].filter((product) => {
        const searchLower = searchTerm.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchLower) ||
          product.nameAr.includes(searchTerm) ||
          product.categoryName.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
        );
      });

      // Sort by relevance (name matches first, then category, then description)
      const sorted = filtered.sort((a, b) => {
        const searchLower = searchTerm.toLowerCase();
        const aNameMatch = a.name.toLowerCase().includes(searchLower);
        const bNameMatch = b.name.toLowerCase().includes(searchLower);

        if (aNameMatch && !bNameMatch) return -1;
        if (!aNameMatch && bNameMatch) return 1;

        return a.name.localeCompare(b.name);
      });

      setSearchResults(sorted.slice(0, 8)); // Limit to 8 results
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const calculateDiscountedPrice = useCallback(
    (price: number, discount: number) => {
      return price - (price * discount) / 100;
    },
    []
  );

  const highlightText = useCallback((text: string, highlight: string) => {
    if (!highlight.trim()) return text;

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-gray-900 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  }, []);

  const getTotalResultsCount = useCallback(() => {
    return [{ name: "", nameAr: "", categoryName: "", description: "" }].filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.nameAr.includes(searchTerm) ||
        p.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
    ).length;
  }, [searchTerm]);

  if (!isOpen || !searchTerm.trim()) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-2">
      <Card
        ref={dropdownRef}
        className="border-2 border-[#3ABFF8]/20 shadow-2xl max-h-[80vh] overflow-hidden"
      >
        <CardContent className="p-0">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-[#3ABFF8]/5 to-[#FF8C00]/5">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-[#3ABFF8]" />
              <span className="font-medium text-gray-900">
                Search Results for "{searchTerm}"
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {isLoading && (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3ABFF8] mx-auto mb-4"></div>
              <p className="text-gray-600">Searching products...</p>
            </div>
          )}
          {!isLoading && searchResults.length === 0 && searchTerm.trim() && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No products found
              </h3>
            </div>
          )}

          {!isLoading && searchResults.length > 0 && (
            <div className="max-h-96 overflow-y-auto">
              {searchResults.map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  searchTerm={searchTerm}
                  onClick={onClose}
                  showArrow={true}
                  variant="default"
                />
              ))}
            </div>
          )}
          {/* Footer */}
          {!isLoading && searchResults.length > 0 && (
            <div className="p-4 border-t bg-gray-50">
              <Link
                href={`/products?search=${encodeURIComponent(searchTerm)}`}
                onClick={onClose}
              >
                <Button className="w-full bg-[#3ABFF8] hover:bg-[#2DA5D8] text-white">
                  View All Results ({getTotalResultsCount()})
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
