import { model, Schema } from "mongoose";
import { Inventory, IProduct, Variant } from "./product.interface";

const variantSchema = new Schema<Variant>(
  {
    type: { type: String },
    value: { type: String },
  },
  { _id: false } // Disable _id creation for variants)
);

const inventorySchema = new Schema<Inventory>(
  {
    quantity: { type: Number },
    inStock: { type: Boolean },
  },
  { _id: false } // Disable _id creation for inventory
);

const productSchema = new Schema<IProduct>({
  id: { type: String, required: true, unique: true },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: { type: [variantSchema] },
  inventory: { type: inventorySchema },
  isDeleted: { type: Boolean, default: false },
});

// protect for delete product fetch
productSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
productSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
productSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const ProductModel = model<IProduct>("Product", productSchema);
