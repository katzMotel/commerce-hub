'use client';

import { ThemeToggle } from './ui';
import { useAppSelector } from '@/lib/redux/hooks';
import { ShoppingCart } from 'lucide-react';  // Import Lucide icon
import { useState } from 'react';
import { CartDrawer } from './cart/CartDrawer';
import Image from 'next/image';
import Link from 'next/link';
export function Header() {
  const { items } = useAppSelector((state) => state.cart);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
    <header className="flex justify-between items-center mb-8">
      <Link href="/" className="flex items-center">
      <Image
        src="/store-logo-v2.png"
        alt="Basecamp Supply"
        width={180}
        height={50}
        priority
        className="h-24 w-auto rounded-lg transition-all hover:scale-105 hover:drop-shadow-lg"
      />
    </Link>
      <div className="flex items-center gap-4">
        {/* Cart Button */}
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Shopping cart"
        >
  
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
    <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}/>
    </>
  );
}