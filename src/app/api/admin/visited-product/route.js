import connectToDB from "@/database";
import VisitedProduct from "@/models/visitedProduct";
import { NextResponse } from "next/server";
import AuthUser from "@/middleware/AuthUser";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const saveVisitedProduct = await VisitedProduct.create(data);

      if (saveVisitedProduct) {
        return NextResponse.json({
          success: true,
          message: "Görüntülenen ürün kaydedildi",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Görüntülnen ürün kaydedilemedi",
        });
      }
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
