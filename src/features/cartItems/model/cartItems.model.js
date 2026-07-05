import ProductModel from "../../product/models/product.model.js";
import UserModel from "../../user/models/user.model.js";

export default class CartItemModel {
  constructor(productID, userID, quantity, id) {
    this.productID = productID;
    this.userID = userID;
    this.quantity = quantity;
    this.id = id;
  }

  static add(productID, userID, quantity) {
  // Validate product
  const product = ProductModel.get(productID);

  if (!product) {
    return {
      error: "Product not found",
    };
  }

  // Validate user
  const user = UserModel.getAll().find(
    (user) => user.id === userID
  );

  if (!user) {
    return {
      error: "User not found",
    };
  }

  // Check if the product already exists in this user's cart
  
  const existingCartItem = cartItems.find(
    (item) =>
      item.productID === productID &&
      item.userID === userID
  );

  // If it exists, increase the quantity
  if (existingCartItem) {
    existingCartItem.quantity += quantity;
    return {
      cartItem:existingCartItem,
      created:false

    };
  }

  // Otherwise create a new cart item
  const cartItem = new CartItemModel(
    productID,
    userID,
    quantity
  );

  cartItem.id = cartItems.length + 1;

  cartItems.push(cartItem);

  return {
    cartItem:cartItem,
    created:true
  }
}
  static get(userID){
    return cartItems.filter(i=>i.userID===userID);
  
  }
  static delete (cartItemID,userID){
    const cartItemIndex = cartItems.findIndex(
      (i)=>i.id==cartItemID  && i.userID==userID
    )
    if(cartItemIndex==-1){
      return "Item not found";

    }else{
      cartItems.splice(cartItemIndex,1)
    }
  
}
}


let cartItems = [
  new CartItemModel(1, 2, 1, 1),
  new CartItemModel(1, 1, 2, 2)
];