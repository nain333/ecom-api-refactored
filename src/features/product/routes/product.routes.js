import express from "express";
import ProductController from "../controllers/product.controller.js";
import { upload } from "../../../middlewares/fileUpload.middleware.js";
import { validateRating } from "../middlewares/product.validation.middleware.js";
import { validateRequest } from "../../../middlewares/validation.middleware.js";
const productRouter = express.Router();

const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);

productRouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProduct,
);
productRouter.post(
  "/rate",
  validateRating,
  validateRequest,
  productController.rateProduct,
);
productRouter.get("/filter", productController.filterProducts);
productRouter.get("/:id", productController.getOneProduct);

export default productRouter;
