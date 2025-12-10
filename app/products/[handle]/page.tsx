import { getProduct } from "@/lib/shopify/client";
import { ProductDetail } from "@/components/products/ProductDetail";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params
}:{
    params: Promise<{ handle :string }>
}) {
    const { handle } = await params;
    const product = await getProduct(handle);

    if(!product){
        notFound();
    }
    return (
        <main className="min-h-screen p-8">
            <ProductDetail product={product} />
        </main>
    );
}
