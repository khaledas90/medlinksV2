"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationData {
  numberOfElements: number;
  pageNumber: number;
  pageSize: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

interface PaginationProps {
  paginationData: PaginationData;
}

export default function Pagination({ paginationData }: PaginationProps) {
  const {
    pageNumber: currentPage,
    totalPages,
    totalElements,
    pageSize,
  } = paginationData;

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(0, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);

      if (startPage > 0) {
        pages.push(0);
        if (startPage > 1) {
          pages.push(-1);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) {
        if (endPage < totalPages - 2) {
          pages.push(-1);
        }
        pages.push(totalPages - 1);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const startItem = currentPage * pageSize + 1;
  const endItem = Math.min((currentPage + 1) * pageSize, totalElements);

  const isFirst = currentPage === 0;
  const isLast = currentPage === totalPages - 1;

  if (totalElements === 0) {
    return null;
  }

  const onPageChange = (page: number) => {
    if (page < 0 || page >= totalPages) {
      return;
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between gap-4`}
    >
      <div className="text-sm text-gray-600 order-2 lg:order-1">
        Showing <span className="font-medium text-gray-900">{startItem}</span>{" "}
        to <span className="font-medium text-gray-900">{endItem}</span> of{" "}
        <span className="font-medium text-gray-900">{totalElements}</span>{" "}
        results
      </div>

      <div className="flex items-center gap-2 order-1 lg:order-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(0)}
          disabled={isFirst}
          className="hidden sm:flex border-gray-300 hover:bg-gray-50 disabled:opacity-50"
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirst}
          className="border-gray-300 hover:bg-gray-50 disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline ml-1">Previous</span>
        </Button>

        <div className="flex items-center gap-1">
          {pageNumbers.map((pageNum, index) => {
            if (pageNum === -1) {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-2 py-1 text-gray-500"
                >
                  ...
                </span>
              );
            }

            return (
              <Button
                key={pageNum}
                variant={pageNum === currentPage ? "default" : "outline"}
                size="sm"
                onClick={() => onPageChange(pageNum)}
                className={
                  pageNum === currentPage
                    ? "bg-[#3ABFF8] hover:bg-[#2DA5D8] text-white border-[#3ABFF8]"
                    : "border-gray-300 hover:bg-gray-50"
                }
              >
                {pageNum + 1}
              </Button>
            );
          })}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLast}
          className="border-gray-300 hover:bg-gray-50 disabled:opacity-50"
        >
          <span className="hidden sm:inline mr-1">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(totalPages - 1)}
          disabled={isLast}
          className="hidden sm:flex border-gray-300 hover:bg-gray-50 disabled:opacity-50"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
