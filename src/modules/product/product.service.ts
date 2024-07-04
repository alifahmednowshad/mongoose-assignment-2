
import { IProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  console.log(result);
  return result;
};
const getSingleProductsFromDB = async (productId: string) => {
  const result = await ProductModel.findOne({ _id: productId});
  console.log(result);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductsFromDB,
};
