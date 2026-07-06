import express from "express";
import swagger from "swagger-ui-express"
import cors from "cors";
import userRouter from "./features/user/routes/user.routes.js"
import productRouter from './features/product/routes/product.routes.js';
import basicAuthorizer from "./middlewares/basic.auth.middleware.js";
import bodyParser from "body-parser";
import jwtAuth from "../src/middlewares/jwt.middleware.js"
import cartRouter from "./features/cartItems/routes/cartItems.routes.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";

import apiDocs from "../swagger.json" with{type:'json'}
const app = express();
// CORS policy configuration
app.use(cors())


app.use(bodyParser.json())
app.use(
  "/api-docs",
  swagger.serve,
  swagger.setup(apiDocs)
);
app.use(loggerMiddleware)
app.use('/api/products',jwtAuth,productRouter);
app.use("/api/cartItems",cartRouter)
app.use("/api/users",userRouter)
app.use((req,res)=>{
    res.status(404).send("API not found")
} )

export default app;

