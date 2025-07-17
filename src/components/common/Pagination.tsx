"use client";

import { Button } from "@/components/ui/button";
import { ListMeta } from "@/types/api";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface PaginationProps {
  meta: ListMeta;
  page?: number;
  setPage?: (page: number) => void;
}

export default function Pagination({
  meta,
  page = 1,
  setPage,
}: PaginationProps) {
  const t = useTranslations("common.product");

  if (!meta || !meta.totalPages || meta.totalElements === 0) {
    return null;
  }

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (meta.totalPages <= maxVisiblePages) {
      for (let i = 0; i < meta.totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(0, page - 2);
      const endPage = Math.min(meta.totalPages - 1, page + 2);

      if (startPage > 0) {
        pages.push(0);
        if (startPage > 1) {
          pages.push(-1);
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < meta.totalPages - 1) {
        if (endPage < meta.totalPages - 2) {
          pages.push(-1);
        }
        pages.push(meta.totalPages - 1);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();
  const startItem = page * meta.size + 1;
  const endItem = Math.min((page + 1) * meta.size, meta.totalElements);

  const isFirst = page === 0;
  const isLast = page === meta.totalPages - 1;

  const handlePageChange = (currentPage: number) => {
    if (
      currentPage < 0 ||
      currentPage >= meta.totalPages ||
      currentPage === page
    ) {
      return;
    }
    // setPage?.(currentPage);
  };

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between gap-4`}
    >
      <div className="text-sm text-gray-600 order-2 lg:order-1">
        {t("Showing")}{" "}
        <span className="font-medium text-gray-900">{startItem}</span> {t("to")}{" "}
        <span className="font-medium text-gray-900">{endItem}</span> {t("of")}{" "}
        <span className="font-medium text-gray-900">{meta.totalElements}</span>{" "}
        {t("results")}
      </div>

      <div className="flex items-center gap-2 order-1 lg:order-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(0)}
          disabled={isFirst}
          className="hidden sm:flex border-gray-300 hover:bg-gray-50 disabled:opacity-50"
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(page - 1)}
          disabled={isFirst}
          className="border-gray-300 hover:bg-gray-50 disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline ml-1">{t("Previous")}</span>
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
                variant={pageNum === page ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(pageNum)}
                className={
                  pageNum === page
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
          onClick={() => handlePageChange(page + 1)}
          disabled={isLast}
          className="border-gray-300 hover:bg-gray-50 disabled:opacity-50"
        >
          <span className="hidden sm:inline mr-1">{t("Next")}</span>
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(meta.totalPages - 1)}
          disabled={isLast}
          className="hidden sm:flex border-gray-300 hover:bg-gray-50 disabled:opacity-50"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
