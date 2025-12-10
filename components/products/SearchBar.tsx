'use client';

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setSearchQuery } from "@/lib/redux/slices/productsSlice";
import { Search, X } from "lucide-react";

export function SearchBar() {
    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector((state) => state.products.searchQuery);

    return(
        <div className="relative max-w-md w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          placeholder="Search gear..."
          className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {searchQuery && (
          <button
            onClick={() => dispatch(setSearchQuery(''))}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    );
}