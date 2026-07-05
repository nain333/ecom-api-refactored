import { body } from "express-validator";

export const validateRating = [
  body("productID")
    .notEmpty()
    .withMessage("ProductID is required")
    .isInt({ min: 1 })
    .withMessage("ProductID must be a positive integer")
    .toInt(),

  body("rating")
    .notEmpty()
    .withMessage("Rating is required")
    .isInt({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5")
    .toInt(),
];