import connectToDB from "@/database";
import Product from "@/models/product";
import { NextResponse } from "next/server";
import AuthUser from "@/middleware/AuthUser";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    await connectToDB();

    const isAuthUser = await AuthUser(req);

    if (isAuthUser?.role === "admin") {
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
          message: "Product updated successfully",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Failed to update the product ! Please try again later",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not authenticated",
      });
    }
  } catch (e) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
