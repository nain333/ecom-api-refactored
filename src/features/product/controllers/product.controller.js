import ProductModel from "../models/product.model.js";
export default class ProductController{
getAllProducts(req,res){
    const products = ProductModel.getAll();
    res.status(200).send(products)
}   
addProduct(req,res){
    const {name,price,sizes}=req.body;
    const newProduct={
        name, 
        price:parseFloat(price),
        sizes:sizes.split(","),
        imageUrl:req.file.filename,

    };
   const createdRecord = ProductModel.add(newProduct);
    res.status(201).send((createdRecord))

} 
rateProduct(req,res){
    const userID = Number(req.query.userID);
    const productID = Number(req.query.productID);
    const rating = Number(req.query.rating)
    ;
    const error = ProductModel.rateProduct(
        userID,
        productID,
        rating
    )
    if(error){
        return res.status(400).send(error);
    }else{
        return res.status(200).send("Rating has been added")
    }
}
getOneProduct(req,res){
    const id  = req.params.id;
    const product = ProductModel.get(id);
    if(!product){
        res.status(404).send("Product not found")

    }else{
        return res.status(200).send(product);
    }
  
}
  filterProducts(req,res){
        const minPrice = req.query.minPrice;
        const  maxPrice = req.query.maxPrice;
        const category=req.query.category;
        const result = ProductModel.filter(minPrice,maxPrice,category);
        console.log(result)
        return res.status(200).json({
    success: true,
    data: result
});
        

    }
    
}