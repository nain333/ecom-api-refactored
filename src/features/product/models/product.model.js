export default class ProductModel {
  constructor(id, name, desc, imageUrl, category, price, sizes) {
    this.id=id;
    this.name=name;
    this.desc=desc;
    this.imageUrl=imageUrl;
    this.category=category;
    this.price = price;
    this.sizes=sizes;
  }
  static getAll(){
    return products;
  }
  static add (product){
    product.id = products.length+1;
    products.push(product)
    return  product;
  }
}
 const products = [
  new ProductModel(
    1,
    "Nike Air Max",
    "Comfortable running shoes with Air cushioning.",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    "Footwear",
    5999,
    ["6", "7", "8", "9", "10"]
  ),

  new ProductModel(
    2,
    "Levi's Slim Fit Jeans",
    "Classic blue slim fit denim jeans.",
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    "Clothing",
    2499,
    ["30", "32", "34", "36"]
  ),

  new ProductModel(
    3,
    "Apple AirPods Pro",
    "Wireless earbuds with active noise cancellation.",
    "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37",
    "Electronics",
    22999,
    ["Standard"]
  ),

  new ProductModel(
    4,
    "Samsung Galaxy Watch",
    "Smartwatch with health and fitness tracking.",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "Electronics",
    18999,
    ["40mm", "44mm"]
  ),

  new ProductModel(
    5,
    "Puma Sports T-Shirt",
    "Breathable sports t-shirt for workouts.",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    "Clothing",
    999,
    ["S", "M", "L", "XL"]
  ),

  new ProductModel(
    6,
    "Wildcraft Backpack",
    "Durable backpack suitable for travel and college.",
    "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
    "Accessories",
    1499,
    ["Standard"]
  ),

  new ProductModel(
    7,
    "Casio Vintage Watch",
    "Retro digital watch with stainless steel strap.",
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    "Accessories",
    3299,
    ["Standard"]
  ),

  new ProductModel(
    8,
    "Adidas Hoodie",
    "Warm and comfortable hoodie for winter.",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    "Clothing",
    2999,
    ["S", "M", "L", "XL"]
  )
];
