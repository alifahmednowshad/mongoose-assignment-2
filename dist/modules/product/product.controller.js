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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_joi_validation_1 = require("./product.joi.validation");
//create product in DB
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const { error } = product_joi_validation_1.productValidationSchema.validate(productData);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.message || "Could not create product!",
                error: error.details,
            });
        }
        const result = yield product_service_1.ProductServices.createProductIntoDB(productData);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Could not create product!",
            error: err,
        });
    }
});
//get all product from DB
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Could not fetch products!",
            error: err,
        });
    }
});
//get single product from DB
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Could not fetch product!",
            error: err,
        });
    }
});
//update product from DB
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productData = req.body;
        const result = yield product_service_1.ProductServices.updateProductFromDB(productId, productData);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Product not found!",
            });
        }
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Could not update product!",
            error: err,
        });
    }
});
//delete product from DB
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_service_1.ProductServices.deleteProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Could not delete product!",
            error: err,
        });
    }
});
// const searchProducts = async (req: Request, res: Response) => {
//   try {
//     const searchTerm = req.query.searchTerm as string;
//     const result = await ProductServices.searchProductsFromDB(searchTerm);
//     res.status(200).json({
//       success: true,
//       message: `Products matching search term '${searchTerm}' fetched successfully!`,
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || "Could not search products!",
//       error: err,
//     });
//   }
// };
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
