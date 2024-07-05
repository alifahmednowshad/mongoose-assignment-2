import Joi from "joi";
import { IProduct, Inventory, Variant} from "./product.interface";

const variantSchema = Joi.object<Variant>({
  type: Joi.string().required(),
  value: Joi.string().required(),
});

const inventorySchema = Joi.object<Inventory>({
  quantity: Joi.number().required(),
  inStock: Joi.boolean().required(),
});


// joi validation schema
const productValidationSchema = Joi.object<IProduct>({
  id: Joi.string().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array().items(variantSchema),
  inventory: inventorySchema.required(),
  isDeleted: Joi.boolean().default(false),
});

export { productValidationSchema };
