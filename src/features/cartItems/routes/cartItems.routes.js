import express from "express";
import {CartItemsController} from "../controller/cartItems.controller.js";
import { validateCartItem } from "../middlewares/cartItem.validation.middleware.js";
import { validateRequest } from "../../../middlewares/validation.middleware.js";
import jwtAuth from "../../../middlewares/jwt.middleware.js";
const cartRouter = express.Router();

const cartController = new CartItemsController();

cartRouter.post(
  "/",
  validateCartItem,
  validateRequest,
  cartController.add
);
cartRouter.get("/",jwtAuth,cartController.get)

export default cartRouter;