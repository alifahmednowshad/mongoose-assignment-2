import { IOrder } from "./order.interface";
import { OrderModel } from "./order.model";


const createOrderIntoDB = async (order: IOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};
const getSingleOrderFromDB = async (orderId: string) => {
  const result = await OrderModel.findOne({ _id: orderId });
  return result;
};


export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  getSingleOrderFromDB,
};
