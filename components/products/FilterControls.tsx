'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { setSortBy, setPriceRange } from '@/lib/redux/slices/productsSlice';

const PRICE_RANGES = [
  { label: 'All Prices', value: [0, 10000] as [number, number] },
  { label: 'Under $50', value: [0, 50] as [number, number] },
  { label: '$50 - $100', value: [50, 100] as [number, number] },
  { label: '$100 - $250', value: [100, 250] as [number, number] },
  { label: '$250 - $500', value: [250, 500] as [number, number] },
  { label: 'Over $500', value: [500, 10000] as [number, number] },
];

export function FilterControls() {
  const dispatch = useAppDispatch();
  const { sortBy, priceRange } = useAppSelector((state) => state.products);

  // Find current price range selection
  const currentRangeIndex = PRICE_RANGES.findIndex(
    (range) => range.value[0] === priceRange[0] && range.value[1] === priceRange[1]
  );

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {/* Sort Dropdown */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Sort by:
        </label>
        <select
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value as any))}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="name">Name</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Price Range Dropdown */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Price:
        </label>
        <select
          value={currentRangeIndex}
          onChange={(e) => {
            const selectedRange = PRICE_RANGES[parseInt(e.target.value)];
            dispatch(setPriceRange(selectedRange.value));
          }}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {PRICE_RANGES.map((range, index) => (
            <option key={index} value={index}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}