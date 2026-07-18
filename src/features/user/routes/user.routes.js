import express from "express";

import UserController from "../controllers/user.controller.js";

import {
    signupValidator,
    loginValidator,
} from "../validators/user.validator.js";

import { validateRequest } from "../../../middlewares/validation.middleware.js";
import asyncHandler from "../../../middlewares/async-handler.middleware.js";

const userRouter = express.Router();

userRouter.post(
    "/signup",
    signupValidator,
    validateRequest,
    asyncHandler(UserController.signUp)
);

userRouter.post(
    "/signin",
    loginValidator,
    validateRequest,
    asyncHandler(UserController.signIn)
);

export default userRouter;