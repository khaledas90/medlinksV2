import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNavigationClient from "./MobileNavigation";
import { getCategoriesTypes } from "@/actions/categories";
import { getTranslations } from "next-intl/server";
import MenuCategoryHeader from "./MenuCategoryHeader";
import CommonSearch from "@/components/commonSearch";

export default async function Header() {
  const products = await getCategoriesTypes({ type: 1 });
  const services = await getCategoriesTypes({ type: 2 });
  const rent = await getCategoriesTypes({ type: 3 });
  const t = await getTranslations("common.header");
  if (!rent || !services || !products) {
    return null;
  }
  const navigationItems = [
    {
      title: "Rent",
      items: rent,
    },
    // {
    //   title: "Services",
    //   items: services,
    // },
    {
      title: "Products",
      items: products,
    },
  ];
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <Image src={logo} alt="Logo" width={120} height={35} />
          </Link>

          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <CommonSearch />
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <MenuCategoryHeader navigationItems={navigationItems} />
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-[#3ABFF8] transition-colors duration-200 font-medium"
            >
              {t("About Us")}
            </Link>
          </nav>

          <div className="flex items-center space-x-2 lg:space-x-4">
            <div
              className="hidden md:flex items-center space-x-2 mx-3 text-sm"
              dir="ltr"
            >
              <Phone className="h-4 w-4 text-[#3ABFF8]" />
              <span className="text-gray-700 font-medium">+971522044556</span>
            </div>
            <LanguageSwitcher />
            <MobileNavigationClient navigationItems={navigationItems} />
          </div>
        </div>
      </div>
    </header>
  );
}
