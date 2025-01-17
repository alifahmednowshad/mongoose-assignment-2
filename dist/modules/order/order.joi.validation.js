"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// joi validation schema
const orderValidationSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    productId: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    quantity: joi_1.default.number().integer().min(1).required(),
});
exports.orderValidationSchema = orderValidationSchema;
