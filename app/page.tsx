'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { fetchProducts } from '@/lib/redux/slices/productsSlice';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/products/ProductCard';
export default function Home() {
  console.log('Home component rendering');
  const dispatch = useAppDispatch();
  console.log('dispatch:', dispatch);
  const { items: products, loading, error } = useAppSelector((state) => state.products);
  console.log('Redux state:', {products, loading, error});
  if (!products){
    return (
      <main className='min-h-screen p-8'>
        <Header/>
        <div className='text-center py-12'>Initializing...</div>
      </main>
    );
  }
  useEffect(() => {
    console.log('UseEffect running!');
    console.log('About to dispatch fetchProducts');
    dispatch(fetchProducts());
    console.log('fetchProductsDispatched');
  }, [dispatch]);

  if (loading) {
    return (
      <main className="min-h-screen p-8">
        <Header />
        <div className="text-center py-12">Loading products...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen p-8">
        <Header />
        <div className="text-center py-12 text-red-500">Error: {error}</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <Header />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </main>
  );
}