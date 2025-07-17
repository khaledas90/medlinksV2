import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Star, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/common/ProductCard";
import { useSearchPopularQuery } from "@/store/api/global/products";
import { Product } from "@/actions/product";

interface SearchDropdownProps {
  searchTerm: string;
  isOpen: boolean;
  onClose: () => void;
  onClear: () => void;
  products?: Product[];
  isLoading?: boolean;
  totalCount?: number;
}

export function SearchDropdown({
  searchTerm,
  isOpen,
  onClose,
  onClear,
  products,
  isLoading = false,
  totalCount = 0,
}: SearchDropdownProps) {
  const { data } = useSearchPopularQuery({ search: searchTerm });

  console.log(data);

  if (!isOpen || !searchTerm.trim()) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-2">
      <Card className="border-2 border-[#3ABFF8]/20 shadow-2xl max-h-[80vh] overflow-hidden">
        <CardContent className="p-0">
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
          {!isLoading && data?.content.length === 0 && searchTerm.trim() && (
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-4">
                Try different keywords or check your spelling
              </p>
              <Button
                variant="outline"
                onClick={onClear}
                className="text-[#3ABFF8] border-[#3ABFF8] hover:bg-[#3ABFF8]/10"
              >
                Clear Search
              </Button>
            </div>
          )}
          {!isLoading && data && data.content.length > 0 && (
            <div className="max-h-96 overflow-y-auto">
              {data.content.map((product) => (
                <ProductCard
                  key={product.id || product.name}
                  product={product}
                  locale="en"
                />
              ))}
            </div>
          )}

          {/* Footer */}
          {!isLoading && data && data.content.length > 0 && (
            <div className="p-4 border-t bg-gray-50">
              <Link
                href={`/products?search=${encodeURIComponent(searchTerm)}`}
                onClick={onClose}
              >
                <Button className="w-full bg-[#3ABFF8] hover:bg-[#2DA5D8] text-white">
                  View All Results ({totalCount})
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
