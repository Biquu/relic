import connectToDB from "@/database";
import VisitedProduct from "@/models/visitedProduct";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

      const AllVisitedProduct = await VisitedProduct.find({});
      if (AllVisitedProduct) {
        return NextResponse.json({
          success: true,
          data: AllVisitedProduct,
        });
      } else {
        return NextResponse.json({
          success: false,
          status: 204,
          message: "Hiçbir Ürün bulunamadı",
        });
      }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
