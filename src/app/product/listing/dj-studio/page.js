import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";




export default async function electricGuitarAllProducts(){


    const getAllProducts = await productByCategory("djStüdyo")

    return <CommonListing data={getAllProducts && getAllProducts.data}/>

}