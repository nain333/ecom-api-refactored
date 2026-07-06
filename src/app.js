import express from "express";
import swagger from "swagger-ui-express"
import userRouter from "./features/user/routes/user.routes.js"
import productRouter from './features/product/routes/product.routes.js';
import basicAuthorizer from "./middlewares/basic.auth.middleware.js";
import bodyParser from "body-parser";
import jwtAuth from "../src/middlewares/jwt.middleware.js"
import cartRouter from "./features/cartItems/routes/cartItems.routes.js";

import apiDocs from "../swagger.json" with{type:'json'}
const app = express();
app.use(bodyParser.json())
app.use(
  "/api-docs",
  swagger.serve,
  swagger.setup(apiDocs)
);
app.use('/api/products',jwtAuth,productRouter);
app.use("/api/cartItems",cartRouter)
app.use("/api/users",userRouter)

export default app;

