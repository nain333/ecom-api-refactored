import express from "express";
const router   = express.Router();
import productController from '../controllers/product.controller.js'
import ProductController from "../controllers/product.controller.js";
const productController = new ProductController()
router.get("/",productController.getAllProducts);
router.post("/",productController.addProduct)
export default router;
