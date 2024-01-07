// pages/api/all-visited-products.js

import connectToDB from "@/database";
import VisitedProduct from "@/models/visitedProduct";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();

    const allVisitedProducts = await VisitedProduct.find({});

    if (allVisitedProducts && allVisitedProducts.length > 0) {
      return NextResponse.json({
        success: true,
        data: allVisitedProducts,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "No visited products found",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later",
    });
  }
}
