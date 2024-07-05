// import { Schema, model, Document } from "mongoose";
// import { IOrder } from "./order.interface";

// export interface OrderDocument extends IOrder, Document {}

// const orderSchema = new Schema<OrderDocument>(
//   {
//     email: { type: String, required: true },
//     productId: { type: String, required: true },
//     price: { type: Number, required: true },
//     quantity: { type: Number, required: true },
//   },
//   { strict: false }
// );

// export const OrderModel = model<OrderDocument>("Order", orderSchema);

import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";

const orderSchema = new Schema<IOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const OrderModel = model<IOrder>("Order", orderSchema);
