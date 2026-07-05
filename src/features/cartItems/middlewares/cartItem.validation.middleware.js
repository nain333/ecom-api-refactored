import { query } from "express-validator";

export const validateCartItem = [
  query("productID")
    .notEmpty()
    .withMessage("ProductID is required")
    .isInt({ min: 1 })
    .withMessage("ProductID must be a positive integer")
    .toInt(),

  query("quantity")
    .notEmpty()
    .withMessage("Quantity is required")
    .isInt({ min: 1 })
    .withMessage("Quantity must be a positive integer")
    .toInt(),
];