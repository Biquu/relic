import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "seller") {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");

      if (!id)
        return NextResponse.json({
          success: false,
          message: "Ürün ID si gerekli",
        });

      const deletedProduct = await Product.findByIdAndDelete(id);

      if (deletedProduct) {
        return NextResponse.json({
          success: true,
          message: "Ürün başarıyla silindi",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Ürün silmede bir hata oluştur ! Lütfen tekrar deneyiniz",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Doğrulama sağlanamadı",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Bir şey yanlış gitti lütfent tekrar deneyiniz",
    });
  }
}