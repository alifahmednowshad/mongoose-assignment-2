import Joi from "joi";
import { IOrder } from "./order.interface";

// joi validation schema
const orderValidationSchema = Joi.object<IOrder>({
  email: Joi.string().email().required(),
  productId: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().integer().min(1).required(),
});

export { orderValidationSchema };
