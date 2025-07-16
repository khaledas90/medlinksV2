import { Category } from "@/actions/categories";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";

export interface NavigationItem {
  title: string;
  items: Category[];
}

interface MobileNavigationClientProps {
  navigationItems?: NavigationItem[];
}
export default async function MenuCategoryHeader({
  navigationItems,
}: MobileNavigationClientProps) {
  const t = await getTranslations("common.header");
  const locale = await getLocale();
  return (
    <div className="MenuCategoryHeader flex items-center space-x-4 lg:space-x-6">
      {navigationItems?.map((item) => (
        <DropdownMenu key={` ${item.title}`} modal={false}>
          <DropdownMenuTrigger className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-[#3ABFF8] transition-colors duration-200 font-medium">
            <span>{t(item.title)}</span>
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64">
            {item.items.map((subItem) => (
              <DropdownMenuItem
                key={`${subItem.type}-${subItem.name}`}
                asChild
                className="cursor-pointer"
                dir="auto"
              >
                <Link
                  href={`/categories/${subItem.type} `}
                  className={`${
                    locale == "en" ? "text-left" : "text-right"
                  } justify-between   w-full`}
                >
                  {locale == "en" ? subItem.name : subItem.nameAr}
                  {subItem.type === 3 && (
                    <Badge className="ml-2 text-[#3ABFF8] " variant="outline">
                      {t("Rent")}
                    </Badge>
                  )}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
}
