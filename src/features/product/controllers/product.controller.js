import ProductModel from "../models/product.model.js";
export default class ProductController {
  getAllProducts(req, res) {
    const products = ProductModel.getAll();
    res.status(200).send(products);
  }
  addProduct(req, res) {
    const { name, price, sizes } = req.body;
    const newProduct = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      imageUrl: req.file.filename,
    };
    const createdRecord = ProductModel.add(newProduct);
    res.status(201).send(createdRecord);
  }
  rateProduct(req, res, next) {
    const userID = req.userID;
    const { productID, rating } = req.body;
    try {
      ProductModel.rateProduct(userID, productID, rating);
      return res.status(200).send("Rating has been added");
    } catch (err) {
      return next(err);
    }
  }
  getOneProduct(req, res, next) {
    try {
      const product = ProductModel.get(req.params.id);

      return res.status(200).send(product);
    } catch (err) {
      return next(err);
    }
  }
  filterProducts(req, res) {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;
    const result = ProductModel.filter(minPrice, maxPrice, category);

    return res.status(200).json({
      success: true,
      data: result,
    });
  }
}
