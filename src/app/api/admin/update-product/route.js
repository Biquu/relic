import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import AuthUser from "@/middleware/AuthUser";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "seller") {
      const extractData = await req.json();
      const {
        _id,
        shopName,
        name,
        phone,
        brand,
        model,
        condition,
        year,
        finish,
        manufacturer,
        category,
        subCategory,

        description,
        price,
        priceDrop,
        imageUrl,
      } = extractData;

      const updatedProduct = await Product.findOneAndUpdate(
        {
          _id: _id,
        },
        {
          shopName,
          name,
          phone,
          brand,
          model,
          condition,
          year,
          finish,
          manufacturer,
          category,
          subCategory,
          description,
          price,
          priceDrop,
          imageUrl,
        },
        { new: true }
      );

      if (updatedProduct) {
        return NextResponse.json({
          success: true,
          message: "Ürün başarıyla güncellendi",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Ürün güncellemede bir hata oluştur ! Lütfen tekrar deneyiniz",
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
      message: "Bir şey yanlış gitti ! Lütfen tekrar deneyiniz",
    });
  }
}
