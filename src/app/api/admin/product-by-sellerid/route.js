import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const sellerId = searchParams.get("id");

    if (!sellerId) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Seller id is required",
      });
    }
    const getData = await Product.find({ sellerID: sellerId});

    if (getData && getData.length) {
      return NextResponse.json({ success: true, data: getData });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "No Product found",
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