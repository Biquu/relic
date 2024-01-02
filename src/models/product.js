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
    listingTitle: String,
    description: String,
    price: Number,
    onSale: String,
    priceDrop: Number,
    imageUrl: String,
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Products || mongoose.model("Products", ProductSchema);

export default Product;
