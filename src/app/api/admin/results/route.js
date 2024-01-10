import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Search query is required",
      });
    }


    const searchFields = ["name", "brand", "model", "finish", "category", "subCategory", "description"];
    const regexQuery = new RegExp(query, 'i');

    const searchProducts = await Product.find({
      $or: searchFields.reduce((acc, field) => {
        acc.push({ [field]: { $regex: regexQuery } });
        return acc;
      }, []),
    });

    if (searchProducts && searchProducts.length > 0) {
      return NextResponse.json({
        success: true,
        data: searchProducts,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "No products found",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}