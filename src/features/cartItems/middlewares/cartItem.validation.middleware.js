import { body } from "express-validator";

export const validateCartItem = [
  body("productID")
    .notEmpty()
    .withMessage("ProductID is required")
    .isInt({ min: 1 })
    .withMessage("ProductID must be a positive integer")
    .toInt(),

  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required")
    .isInt({ min: 1 })
    .withMessage("Quantity must be a positive integer")
    .toInt(),
];