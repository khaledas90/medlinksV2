"use client";
import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { useCallback, useEffect, useRef, useState } from "react";
import { SearchDropdown } from "./SearchDropdown";

export default function CommonSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
    if (value.trim()) {
      setIsSearchOpen(true);
    } else {
      setIsSearchOpen(false);
    }
  }, []);

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchTerm.trim()) {
        window.location.href = `/products?search=${encodeURIComponent(
          searchTerm
        )}`;
      }
    },
    [searchTerm]
  );

  const handleSearchFocus = useCallback(() => {
    if (searchTerm.trim()) {
      setIsSearchOpen(true);
    }
  }, [searchTerm]);

  const handleSearchClose = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  const handleSearchClear = useCallback(() => {
    setSearchTerm("");
    setIsSearchOpen(false);
    searchInputRef.current?.focus();
  }, []);

  return (
    <div className={` w-full  relative`}>
      <form onSubmit={handleSearchSubmit} className="relative w-full">
        <Input
          ref={searchInputRef}
          type="text"
          placeholder="Search medical equipment, services..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          onFocus={handleSearchFocus}
          className="pl-4 pr-10 border-gray-300  focus:ring-0 transition-colors duration-200"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#3ABFF8] transition-colors duration-200"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </button>
      </form>
      <SearchDropdown
        searchTerm={searchTerm}
        isOpen={isSearchOpen}
        onClose={handleSearchClose}
        onClear={handleSearchClear}
      />
    </div>
  );
}
