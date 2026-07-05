import express from "express";

import UserController from "../controllers/user.controller.js";
import {
    signupValidator,
    loginValidator,
} from "../validators/user.validator.js";

import { validateRequest } from "../../../middlewares/validation.middleware.js"

const userRouter = express.Router();

console.log("user routes loaded");


userRouter.post(
    "/signup",
    signupValidator,
    validateRequest,
    UserController.signUp
);

userRouter.post(
    "/signin",
    loginValidator,
    validateRequest,
    UserController.signIn
);

export default userRouter;