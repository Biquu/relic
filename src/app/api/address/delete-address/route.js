import connectToDB from "@/database";
import AuthUser from "@/middleware/AuthUser";
import Address from "@/models/address";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        success: false,
        message: "Adres ID si gerekli",
      });
    }

    const isAuthUser = await AuthUser(req);

    if (isAuthUser) {
      const deletedAddress = await Address.findByIdAndDelete(id);

      if (deletedAddress) {
        return NextResponse.json({
          success: true,
          message: "Adres Başarıyla Silindi",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Adres silmede bir hata olutşur ! Lütfen tekrar deneyiniz",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "Doğrulama Sağalanamadı",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Bir hata oluştu ! Lütfen tekrar deneyiniz",
    });
  }
}