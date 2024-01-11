import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const getData = await Product.find({ category: id });

    if (getData) {
      return NextResponse.json({
        success: true,
        data: getData,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "Ürün bulunamadı !",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Bir şey yanlış gitti ! Lütfen tekrar deneyiniz",
    });
  }
}