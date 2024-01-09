import CommonDetails from "@/components/CommonDetails";
import { productById } from "@/services/product";

export default async function ProductDetails({ params }) {
  const productDetailsData = await productById(params.details);
  


  console.log(params, "param")
  console.log(params.details, "detai")



  console.log(productDetailsData.data, "sas");

  return <CommonDetails item={productDetailsData && productDetailsData.data} />;
}
