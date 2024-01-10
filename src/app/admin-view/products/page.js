"use client"

import CommonListingSeller from "@/components/CommonListingSeller";
import { GlobalContext } from "@/context";
import { AllProductsbySellerID } from "@/services/product";
import { useContext, useEffect } from "react";



export default function AdminAllProducts() {
    
    const {user,  sellerProducts,
        setSellerProducts} = useContext(GlobalContext);


    async function handleGetSellerProducts(){
        const get = await AllProductsbySellerID(user._id)
        setSellerProducts(get)
    }
    

    useEffect(() => {
        if (user !== null) {
          handleGetSellerProducts()
        }
      }, [user]);

    console.log(sellerProducts)
    
    
    
    return <CommonListingSeller data={sellerProducts.data}/>
    
    

}