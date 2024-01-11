import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);
    if (isAuthUser) {
      const { searchParams } = new URL(req.url);
      const id = searchParams.get("id");
      if (!id)
        return NextResponse.json({
          success: false,
          message: "Sepet Öğesi Kimliği gerekli",
        });

      const deleteCartItem = await Cart.findByIdAndDelete(id);

      if (deleteCartItem) {
        return NextResponse.json({
          success: true,
          message: "Sepet Öğesi başarıyla silindi",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Sepet öğesi silinemedi! Lütfen tekrar deneyin.",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Doğrulama sağlanamadı",
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Bir şey yanlış gitti ! Lütfen tekrar deneyiniz",
    });
  }
}