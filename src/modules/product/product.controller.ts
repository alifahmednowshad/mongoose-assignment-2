import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { productValidationSchema } from "./product.joi.validation";

//create product in DB
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const { error } = productValidationSchema.validate(productData);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message || "Could not create product!",
        error: error.details,
      });
    }

    const result = await ProductServices.createProductIntoDB(productData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Could not create product!",
      error: err,
    });
  }
};

//get all product from DB
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Could not fetch products!",
      error: err,
    });
  }
};

//get single product from DB
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.getSingleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Could not fetch product!",
      error: err,
    });
  }
};

// Update product in DB
const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productData = req.body;

    // Validate the incoming product data
    const { error } = productValidationSchema.validate(productData);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message || "Invalid product data!",
        error: error.details,
      });
    }

    // Update the product in the database
    const result = await ProductServices.updateProductFromDB(productId, productData);

    // If no product is found with the given ID
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    // Respond with success message and updated product data
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err: any) {
    // Handle any unexpected errors
    res.status(500).json({
      success: false,
      message: err.message || "Could not update product!",
      error: err,
    });
  }
};

//delete product from DB
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Could not delete product!",
      error: err,
    });
  }
};

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

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
