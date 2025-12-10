import type { Product } from "@/types/shopify";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "@/lib/shopify/client";
import { PayloadAction } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ProductsState { 
    items: Product[];
    loading: boolean;
    error: string | null;
    searchQuery: string;
    sortBy: 'name' | 'price-asc' | 'price-desc';
    priceRange: [number, number];
}

const initialState: ProductsState = {
    items:[],
    loading: false,
    error: null,
    searchQuery:'',
    sortBy: 'name',
    priceRange: [0, 2000],
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const products = await getProducts();
        return products;
    } 
);

const productsSlice = createSlice({
    name:'products',
    initialState,
      reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action: PayloadAction<'name' | 'price-asc' | 'price-desc'>) => {
      state.sortBy = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
  },
    extraReducers: (builder) =>{
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading= true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch products'
            });
    },
});
export const selectFilteredProducts = createSelector(
    [
        (state: RootState) => state.products.items,
        (state: RootState) => state.products.searchQuery,
        (state: RootState) => state.products.sortBy,
        (state: RootState) => state.products.priceRange,
    ],
    (items, searchQuery, sortBy, priceRange) => {
        let filtered = [...items];

        //filter by search query
        if(searchQuery){
            filtered = filtered.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        //filter by price range
        filtered = filtered.filter((product) => {
            const price = parseFloat(product.priceRange.minVariantPrice.amount);
            return price >= priceRange[0] && price <= priceRange[1];
        });

        //sort products
        filtered.sort((a,b) => {
            const priceA = parseFloat(a.priceRange.minVariantPrice.amount);
            const priceB = parseFloat(b.priceRange.minVariantPrice.amount);

            switch(sortBy){
                case 'name':
                    return a.title.localeCompare(b.title);
                case 'price-asc':
                    return priceA-priceB;
                case 'price-desc':
                    return priceB - priceA;
                default:
                    return 0;
            }
        });
        return filtered;
    }
)
export const { setSearchQuery, setSortBy, setPriceRange } = productsSlice.actions;
export default productsSlice.reducer;