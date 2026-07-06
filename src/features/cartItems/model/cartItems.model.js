import ProductModel from "../../product/models/product.model.js";
import UserModel from "../../user/models/user.model.js";
import { getNextId } from "../../../utils/id-generator.js";
import NotFoundError from "../../../errors/not-found.error.js";
import BadRequestError from "../../../errors/bad-request.error.js";
export default class CartItemModel {
  constructor(productID, userID, quantity, id) {
    this.productID = productID;
    this.userID = userID;
    this.quantity = quantity;
    this.id = id;
  }

  static add(productID, userID, quantity) {
    // Validate quantity
    const parsedQuantity = Number(quantity);

if (!Number.isInteger(parsedQuantity) || parsedQuantity <= 0) {
    throw new BadRequestError(
        "Quantity must be a positive integer."
    );
}
  // Validate product
   ProductModel.get(productID);

 

  // Validate user
 UserModel.getById(userID);

  // Check if the product already exists in this user's cart
  
  const existingCartItem = cartItems.find(
    (item) =>
      item.productID === productID &&
      item.userID === userID
  );

  // If it exists, increase the quantity
  if (existingCartItem) {
    existingCartItem.quantity += parsedQuantity;
    return {
      cartItem:existingCartItem,
      created:false

    };
  }

  // Otherwise create a new cart item
  const cartItem = new CartItemModel(
    productID,
    userID,
  parsedQuantity,
    getNextId(cartItems)
  );

  
  cartItems.push(cartItem);

  return {
    cartItem:cartItem,
    created:true
  }
}
  static get(userID){
    return cartItems.filter(
    (cartItem) => cartItem.userID === userID
);
  
  }
  static delete (cartItemID,userID){
    const cartItemIndex = cartItems.findIndex(
      (cartItem) =>
    cartItem.id === Number(cartItemID)  && cartItem.userID===userID
    )
    if (cartItemIndex === -1) {
    throw new NotFoundError("Cart item not found.");
}

cartItems.splice(cartItemIndex, 1);
  
}
}


let cartItems = [
  new CartItemModel(1, 2, 1, 1),
  new CartItemModel(1, 1, 2, 2)
];