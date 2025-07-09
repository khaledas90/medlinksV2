"use client";

import { useParams } from "next/navigation";
import React from "react";
import MenuCategoryHeader, { NavigationItem } from "./MenuCategoryHeader";

export default function MenuClient({navigationItems}: {navigationItems: NavigationItem[]}) {
  const { locale } = useParams();
 

  return (
    <div>
      <MenuCategoryHeader locale={locale as string} navigationItems={navigationItems} />
    </div>
  );
}