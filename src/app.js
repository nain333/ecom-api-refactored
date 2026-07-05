import express from "express";
import userRouter from "./features/user/routes/user.routes.js"
import productRouter from './features/product/routes/product.routes.js';
import basicAuthorizer from "./middlewares/basic.auth.middleware.js";
import bodyParser from "body-parser";
import jwtAuth from "../src/middlewares/jwt.middleware.js"
import cartRouter from "./features/cartItems/routes/cartItems.routes.js";
const app = express();
app.use(bodyParser.json())
app.use('/api/products',jwtAuth,productRouter);
app.use("/api/cartItems",cartRouter)
app.use("/api/users",userRouter)

export default app;

