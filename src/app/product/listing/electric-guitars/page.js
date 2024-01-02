import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";




export default async function electricGuitarAllProducts(){


    const getAllProducts = await productByCategory("elektroGitar")

    return <CommonListing data={getAllProducts && getAllProducts.data}/>

}