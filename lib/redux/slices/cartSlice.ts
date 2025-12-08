import type { CartItem } from "@/types/shopify";

interface CartState {
    items: CartItem[];
    total: number;
}