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
        message: "Satıcı ID si gerekli",
      });
    }
    const getData = await Product.find({ sellerID: sellerId});

    if (getData && getData.length) {
      return NextResponse.json({ success: true, data: getData });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "Ürün bulunamadı !",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Bir şey yanlış gitti ! Lütfen tekrar deneyiniz",
    });
  }
}