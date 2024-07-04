import { Schema, model } from 'mongoose';
import { IProduct, Inventory, Variant } from './product.interface';

const variantSchema = new Schema<Variant>({
  type: { type: String },
  value: { type: String },
});

const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<IProduct>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema] },
  inventory: { type: inventorySchema, required: true },
});

export const ProductModel = model<IProduct>('Product', productSchema);
