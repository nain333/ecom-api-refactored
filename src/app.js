import express from "express";
import userRouter from "./features/user/routes/user.routes.js"
import productRouter from './features/product/routes/product.routes.js';
import basicAuthorizer from "./middlewares/basic.auth.middleware.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json())
app.use('/api/products',basicAuthorizer,productRouter);
app.use("/api/users",userRouter)

export default app;

