import type { Product, ProductDisplay } from '@/types/shopify';

export function transformProduct(product: Product): ProductDisplay {
    return{
        id: product.id,
        title: product.title,
        handle: product.handle,
        description: product.description,
        price: parseFloat(product.priceRange.minVariantPrice.amount),
        currencyCode: product.priceRange.minVariantPrice.currencyCode,
        image: product.images.edges[0]?.node.url || '',
        imageAlt: product.images.edges[0]?.node.altText || product.title,
  };
}
