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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(product);
    return result;
});
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
const getSingleProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOne({ _id: productId });
    return result;
});
const updateProductFromDB = (productId, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findByIdAndUpdate(productId, productData, {
        new: true,
    });
    return result;
});
const deleteProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.updateOne({ _id: productId }, { isDeleted: true });
    return result;
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductFromDB,
    deleteProductFromDB,
};
