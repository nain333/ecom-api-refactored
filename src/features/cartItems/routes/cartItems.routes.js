import express from "express";
import {CartItemsController} from "../controllers/cartItems.controller.js";
import { validateCartItem } from "../middlewares/cartItem.validation.middleware.js";
import { validateRequest } from "../../../middlewares/validation.middleware.js";
import jwtAuth from "../../../middlewares/jwt.middleware.js";
const cartRouter = express.Router();

const cartController = new CartItemsController();

cartRouter.post(
  "/",jwtAuth,
  validateCartItem,
  validateRequest,
  cartController.add
);
cartRouter.get("/",jwtAuth,cartController.get)
cartRouter.delete("/:id",jwtAuth,cartController.delete)

export default cartRouter;