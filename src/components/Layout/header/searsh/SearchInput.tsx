"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SearchDropdown } from "./PaperSearch";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { uiActions } from "@/store/uiSlice";
import { useTranslations } from "next-intl";

export default function SearchInput() {
  const [open, setOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch();
  const t = useTranslations("common.header");

  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    setInputValue(inputValue);
  }, [inputValue]);

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (inputValue.trim()) {
        window.location.href = `/product?search=${encodeURIComponent(
          inputValue
        )}`;
      }
      setOpen(false);
      const input = e.currentTarget.querySelector("input") as HTMLInputElement;
      input?.blur();
      dispatch(uiActions.setIsNavigating(true));
    },
    [inputValue, dispatch]
  );

  const handleSearchClose = useCallback(() => {
    setOpen(false);
    setIsFocused(false);
  }, []);

  const handleSearchClear = useCallback(() => {
    setInputValue("");
    setInputValue("");
    setOpen(false);
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-full relative">
      <form onSubmit={handleSearchSubmit} className="relative w-full">
        <Input
          ref={inputRef}
          type="text"
          placeholder={t("Search medical equipment, services, and products")}
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setInputValue(value);
            if (debounceTimer.current) {
              clearTimeout(debounceTimer.current);
            }
            debounceTimer.current = setTimeout(() => {
              setInputValue(value);
            }, 200);
          }}
          onFocus={() => {
            setOpen(true);
            setIsFocused(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setIsFocused(false);
            }, 150);
          }}
          className="pl-4 pr-10 border-gray-300 focus:ring-0 transition-colors duration-200"
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

      {isFocused && (
        <div
          className={clsx(
            "transition-all duration-300",
            open ? "visible opacity-100" : "invisible opacity-0"
          )}
        >
          <SearchDropdown
            searchTerm={inputValue}
            isOpen={open}
            onClose={handleSearchClose}
            onClear={handleSearchClear}
          />
        </div>
      )}
    </div>
  );
}
