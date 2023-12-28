import connectToDB from "@/database";
import { NextResponse } from "next/server";
import Joi from "joi";
import Product from "@/models/product";

const AdminAddNewProductSchema = Joi.object({
  shopName: Joi.string().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  brand: Joi.string().required(),
  model: Joi.string().required(),
  condition: Joi.string().required(),
  year: Joi.number(),
  finish: Joi.string(),
  manufacturer: Joi.string(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  listingTitle: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  onSale: Joi.string().required(),
  priceDrop: Joi.number().required(),
  imageUrl: Joi.string().required(),
});

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();

    const user = "admin";

    if (user === "admin") {
      const extractData = await req.json();

      const {
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
        listingTitle,
        description,
        price,
        onSale,
        priceDrop,
        imageUrl,
      } = extractData;

      const { error } = AdminAddNewProductSchema.validate({
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
        listingTitle,
        description,
        price,
        onSale,
        priceDrop,
        imageUrl,
      });

      if (error) {
        return NextResponse.json({
          success: false,
          message: error.details[0].message,
        });
      }

      const newlyCreatedProduct = await Product.create(extractData);

      if (newlyCreatedProduct) {
        return NextResponse.json({
          success: true,
          message: "Ürün başarıyla eklendi",
        });
      } else {
        return NextResponse.json({
          success: false,
          message: "Ürün eklenmede sorun oluştu, lütfen tekrar deneyiniz",
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        message: "You are not autorized !",
      });
    }
  } catch (error) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again later",
    });
  }
}
