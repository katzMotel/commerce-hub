import { Card, Button } from '@/components/ui';
import { useAppDispatch } from '@/lib/redux/hooks';
import { addToCart } from '@/lib/redux/slices/cartSlice';
import type { Product } from '@/types/shopify';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  
  const price = parseFloat(product.priceRange.minVariantPrice.amount);
  const currency = product.priceRange.minVariantPrice.currencyCode;
  const image = product.images.edges[0]?.node;

  const handleAddToCart = () => {
    // Transform Product into CartItem format
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: price,
      quantity: 1, // Will be handled by the reducer
      image: image?.url || '',
      imageAlt: image?.altText || product.title,
    }));
  };

  return (
    <Card hover className="p-4 flex flex-col">
      {image && (
        <div className="relative aspect-square w-full mb-4 bg-white rounded overflow-hidden">
          <img 
            src={image.url} 
            alt={image.altText || product.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {product.title}
        </h3>
        
        <p className="text-xl font-bold text-gray-900 dark:text-white">
          ${price.toFixed(2)} {currency}
        </p>
      </div>

      <Button 
        variant="primary" 
        size="md" 
        className="mt-4 w-full"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </Card>
  );
}