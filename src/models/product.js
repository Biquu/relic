import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    shopName: String,
    name: String,
    phone: String,
    brand: String,
    model: String,
    condition: String,
    year: String,
    finish: String,
    manufacturer: String,
    category: String,
    subCategory: String,
    description: String,
    price: Number,
    priceDrop: Number,
    imageUrl: String,
    sellerID: String,
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Product;
