import mongoose from "mongoose";

const VisitedProductSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true }
);

const VisitedProduct =
  mongoose.models.VisitedProduct ||
  mongoose.model("VisitedProduct", VisitedProductSchema);

export default VisitedProduct;
