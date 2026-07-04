import express from "express";

import UserController from "../controllers/user.controller.js";
import {
    signupValidator,
    loginValidator,
} from "../validators/user.validator.js";

import { validateRequest } from "../../../middlewares/valiation.middleware.js"

const userRouter = express.Router();

console.log("user routes loaded");

console.log({
    signupValidator,
    loginValidator,
    validateRequest,
    signUp: UserController.signUp,
    signIn: UserController.signIn,
});
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