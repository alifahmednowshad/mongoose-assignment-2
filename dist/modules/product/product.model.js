"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    type: { type: String, },
    value: { type: String, },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, },
    inStock: { type: Boolean, },
});
const productSchema = new mongoose_1.Schema({
    id: { type: String, unique: true },
    name: { type: String, },
    description: { type: String, },
    price: { type: Number, },
    category: { type: String, },
    tags: { type: [String], },
    variants: { type: [variantSchema], },
    inventory: { type: inventorySchema, },
    isDeleted: { type: Boolean, default: false },
});
// protect for delete product fetch
productSchema.pre("find", function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
productSchema.pre("findOne", function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
productSchema.pre("aggregate", function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
    next();
});
exports.ProductModel = (0, mongoose_1.model)("Product", productSchema);
