import type { Product } from "@/types/shopify";

interface ProductsState { 
    items: Product;
    loading: boolean;
    error: string | null;
}
