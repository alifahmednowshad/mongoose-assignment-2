"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const order_joi_validation_1 = require("./order.joi.validation");
//create order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const { error } = order_joi_validation_1.orderValidationSchema.validate(orderData);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.message || "Could not create order!",
                error: error.details,
            });
        }
        const result = yield order_service_1.OrderServices.createOrderIntoDB(orderData);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Could not create order!",
            error: err,
        });
    }
});
// get all order from DB
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.getAllOrdersFromDB();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Could not fetch orders!",
            error: err,
        });
    }
});
// get single order from DB
// const getSingleOrder = async (req: Request, res: Response) => {
//   try {
//     const orderId = req.params.orderId;
//     const result = await OrderServices.getSingleOrderFromDB(orderId);
//     res.status(200).json({
//       success: true,
//       message: "Order fetched successfully!",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "Could not fetch order!",
//       error: err,
//     });
//   }
// };
exports.OrderControllers = {
    createOrder,
    getAllOrders,
};
