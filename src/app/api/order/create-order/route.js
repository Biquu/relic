import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Cart from "@/models/cart";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const data = await req.json();
      const { user } = data;

      const saveNewOrder = await Order.create(data);

      if (saveNewOrder) {
        await Cart.deleteMany({ userID: user });

        return NextResponse.json({
          success: true,
          message: "Ürünler yolda !",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Sipariş oluşturulamadı! Lütfen tekrar deneyin",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Doğrulama sağlanamadı",
      });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: "Bir hata oluştu ! Lütfen daha sonra tekrar deneyiniz",
    });
  }
}