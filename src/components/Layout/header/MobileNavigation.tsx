"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import { Search, Phone, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Category } from "@/actions/categories";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

interface NavigationItem {
  title: string;
  items: Category[];
}

interface MobileNavigationClientProps {
  navigationItems: NavigationItem[];
}

export default function MobileNavigationClient({
  navigationItems,
}: MobileNavigationClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openMenuItems, setOpenMenuItems] = useState(new Set<string>());
  const { locale } = useParams();
  const t = useTranslations("common.header");

  const toggleMenuItem = (itemTitle: string) => {
    setOpenMenuItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemTitle)) {
        newSet.delete(itemTitle);
      } else {
        newSet.add(itemTitle);
      }
      return newSet;
    });
  };

  const handleSheetClose = () => {
    setIsOpen(false);
    setOpenMenuItems(new Set());
  };

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden p-2"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <Search className="h-5 w-5" />
      </Button>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="lg:hidden p-2">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[300px] overflow-auto sm:w-[400px]"
        >
          <VisuallyHidden>
            <DialogTitle>Navigation Menu</DialogTitle>
          </VisuallyHidden>
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center pb-4 border-b">
              <Link
                href="/"
                className="flex items-center space-x-2 flex-shrink-0"
              >
                <Image src={logo} alt="Logo" width={120} height={35} />
              </Link>
            </div>
            <div className="py-4 border-b">
              <div className="relative">
                <Input
                  type="text"
                  placeholder={t(
                    "Search medical equipment, services, and products"
                  )}
                  className="pl-4 pr-10 border-gray-300 focus:border-[#3ABFF8]"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <nav className="flex-1 py-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-2">
                  <button
                    className="w-full flex items-center justify-between cursor-pointer space-x-2 text-left focus:outline-none focus:ring-0 rounded-md p-1"
                    onClick={() => toggleMenuItem(item.title)}
                    aria-expanded={openMenuItems.has(item.title)}
                    aria-controls={`menu-${item.title}`}
                  >
                    <h3 className="font-medium text-gray-900 text-lg">
                      {t(item.title)}
                    </h3>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                        openMenuItems.has(item.title) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    id={`menu-${item.title}`}
                    className={`pl-4 space-y-1 transition-all duration-200 ${
                      openMenuItems.has(item.title) ? "block" : "hidden"
                    }`}
                  >
                    {item.items.map((subItem) => (
                      <Link
                        key={`${subItem.type}-${subItem.name}`}
                        href={
                          subItem.type === 2
                            ? `/product/${subItem.id}`
                            : `/categories/${subItem.id}`
                        }
                        className="block text-gray-600 hover:text-[#3ABFF8] transition-colors duration-200 py-2 px-2 rounded-md hover:bg-gray-50"
                        onClick={handleSheetClose}
                      >
                        {locale == "en" ? subItem.name : subItem.nameAr}
                        {subItem.type === 3 && (
                          <Badge
                            className="ml-2 text-[#3ABFF8]"
                            variant="outline"
                          >
                            {t("Rent")}
                          </Badge>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                href="/about"
                className="block font-medium text-gray-900 text-lg py-2"
                onClick={() => setIsOpen(false)}
              >
                {t("About Us")}
              </Link>
            </nav>
            <div className="border-t pt-4 space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#3ABFF8]" />
                <span className="text-gray-700 font-medium">+971522044556</span>
              </div>
              <Button className="w-full bg-[#FF8C00] hover:bg-[#E67E00] text-white">
                {t("Contact Us")}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div
        className={`${
          isSearchOpen ? "block" : "hidden"
        } absolute top-full left-0 right-0 bg-white border-b shadow-sm lg:hidden`}
      >
        <div className="container mx-auto px-4 pb-3">
          <div className="relative">
            <Input
              type="text"
              placeholder={t(
                "Search medical equipment, services, and products"
              )}
              className="pl-4 pr-10 border-gray-300 focus:border-[#3ABFF8] focus:ring-[#3ABFF8]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </>
  );
}
