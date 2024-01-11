import connectToDB from "@/database";
import VisitedProduct from "@/models/visitedProduct";
import { NextResponse } from "next/server";
import Product from "@/models/product";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const allVisitedProducts = await VisitedProduct.find({});

    if (allVisitedProducts && allVisitedProducts.length) {
      const productIds = allVisitedProducts.map((products) => products.product);

      const totalProductVisitCounts = await VisitedProduct.aggregate([
        {
          $group: {
            _id: "$product",
            totalVisitCount: { $sum: 1 },
          },
        },
      ]);
      
      

      const data = await Product.find(
        { _id: { $in: productIds } }, // Filtreleme koşulu
        {
          brand: 1,
          category: 1,
          price: 1,
          subCategory: 1,
          _id: 1,
        }
      );

     
      const result = data.map((product) => {
        const totalProductVisitCount = totalProductVisitCounts.find((tpvc) =>
          tpvc._id.equals(product._id)
        );

        return {
          ...product.toObject(),
          totalVisitCount: totalProductVisitCount
            ? totalProductVisitCount.totalVisitCount
            : 0,
        };
      });

      return NextResponse.json({
        success: true,
        data: result,
      });
    } else {
      return NextResponse.json({
        success: false,
        status: 204,
        message: "Görüntülenen ürün bulunamadı",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Bir şey yanlış gitti! Lütfen tekrar deneyiniz",
    });
  }
}
