import connectToDB from "@/database";
import VisitedProduct from "@/models/visitedProduct";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import AuthUser from "@/middleware/AuthUser";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();
    const isAuthUser = await AuthUser(req);

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("id");

    if (!userId) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: "Kullanıcı id si gerekli",
      });
    }

    // Belirli bir kullanıcının ziyaret ettiği ürünleri çekin
    const visitedProducts = await VisitedProduct.find({ user: userId });

    if (visitedProducts && visitedProducts.length) {
      // VisitedProduct'lerin productId'lerini bir diziye ekleyin
      const productIds = visitedProducts.map(
        (visitedProduct) => visitedProduct.product
      );

      // Toplam ziyaret sayılarını alın
      const totalProductVisitCounts = await VisitedProduct.aggregate([
        { $match: { product: { $in: productIds } } },
        {
          $group: {
            _id: "$product",
            totalVisitCount: { $sum: 1 },
          },
        },
      ]);
      const uID = new mongoose.Types.ObjectId(userId);

      // Kullanıcının ziyaret sayılarını alın
      const userProductVisitCounts = await VisitedProduct.aggregate([
        { $match: { user: uID, product: { $in: productIds } } },
        {
          $group: {
            _id: "$product",
            userVisitCount: { $sum: 1 },
          },
        },
      ]);
     

      // Product koleksiyonundan ilgili productId'ler için verileri çekin
      const productsData = await Product.find(
        { _id: { $in: productIds } }, // Filtreleme koşulu
        {
          // Projeksiyon objesi (sadece belirtilen alanları seç)
          brand: 1,
          category: 1,
          price: 1,
          subCategory: 1,
          _id: 1,
        }
      );

      // Ziyaret sayılarını eşleştirin ve verilere ekleyin
      const result = productsData.map((product) => {
        const totalProductVisitCount = totalProductVisitCounts.find((tpvc) =>
          tpvc._id.equals(product._id)
        );
        const userProductVisitCount = userProductVisitCounts.find((upvc) =>
          upvc._id.equals(product._id)
        );
        return {
          ...product.toObject(),
          totalVisitCount: totalProductVisitCount
            ? totalProductVisitCount.totalVisitCount
            : 0,
          userVisitCount: userProductVisitCount
            ? userProductVisitCount.userVisitCount
            : 0,
        };
      });

      return NextResponse.json({ success: true, data: result });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "Bu kullanıcı id sine sahip Ürün bulunamadı !",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({
      success: false,
      message: "Bir şey yanlış gitti ! Lütfen tekrar deneyiniz",
    });
  }
}
