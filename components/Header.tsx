'use client';

import { ThemeToggle } from './ui';
import { useAppSelector } from '@/lib/redux/hooks';
import { ShoppingCart } from 'lucide-react';  // Import Lucide icon

export function Header() {
  const { items } = useAppSelector((state) => state.cart);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold">CommerceHub</h1>
      
      <div className="flex items-center gap-4">
        {/* Cart Button */}
        <button 
          className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Shopping cart"
        >
          {/* Lucide cart icon - much cleaner! */}
          <ShoppingCart className="w-6 h-6" />
          
          {/* Item count badge */}
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
        
        <ThemeToggle />
      </div>
    </header>
  );
}