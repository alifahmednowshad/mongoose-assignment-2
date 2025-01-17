import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();
router.post('/', OrderControllers.createOrder);
router.get("/orders", OrderControllers.getOrdersByEmail);
router.get("/", OrderControllers.getAllOrders);
router.get("/:orderId", OrderControllers.getSingleOrder);


export const OrderRoutes = router;
