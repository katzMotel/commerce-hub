'use client';
import { clearCart } from "@/lib/redux/slices/cartSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";
import Link from "next/link";
export default function SuccessPage(){
    const dispatch = useAppDispatch();

    useEffect(()=> {
        dispatch(clearCart())
    },[dispatch])
    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md space-y-4 text-center p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto"/>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Order Confirmed!</h1>
            <p className="text-gray-600 dark:text-gray-400">Please check your email for order details/shipping information.  
                If you need to make changes to your order please contact support at{' '} 
                <a href="mailto:customerservice@basecampsupply.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                customerservice@basecampsupply.com
                </a>
            </p>
            
                <Link
                    href="/"
                >
                <Button
                    variant = 'outline'
                    size = 'lg'
                    className="w-full"
                    >
                        Home
                    </Button>
                    </Link>
            </div>
        </div>
    )
}