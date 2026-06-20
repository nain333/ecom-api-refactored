import express from "express";
import productRouter from './features/product/routes/product.routes.js';
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json())
app.use('/api/products',productRouter);

export default app;

