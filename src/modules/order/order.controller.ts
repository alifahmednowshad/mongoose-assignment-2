import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { orderValidationSchema } from "./order.joi.validation";

//create order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const { error } = orderValidationSchema.validate(orderData);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message || "Could not create order!",
        error: error.details,
      });
    }

    const result = await OrderServices.createOrderIntoDB(orderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Could not create order!",
      error: err,
    });
  }
};

// get orders by user email
const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    console.log(`Fetching orders for email: ${email}`);

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email query parameter is required',
      });
    }

    const result = await OrderServices.getOrdersByEmailFromDB(email);

    res.status(200).json({
      success: true,
      message: `Orders fetched successfully for user email: ${email}`,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Could not fetch orders!',
      error: err,
    });
  }
};

// get all order from DB
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersFromDB();

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Could not fetch orders!",
      error: err,
    });
  }
};

// get single order from DB
const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const result = await OrderServices.getSingleOrderFromDB(orderId);

    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Could not fetch order!",
      error: err,
    });
  }
};



export const OrderControllers = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  getOrdersByEmail,
};
