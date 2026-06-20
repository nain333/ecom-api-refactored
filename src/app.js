import express from "express";
import productRouter from './features/product/routes/product.routes.js';
const app = express();
app.use('/api/products',productRouter);
export default app;

