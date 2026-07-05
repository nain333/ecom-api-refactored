import CartItemModel from "../model/cartItems.model.js";
export class CartItemsController {
  add(req, res) {
    const { productID, quantity } = req.body;
    const userID = req.userID;

    const result = CartItemModel.add(productID, userID, quantity);

    // Handle model errors
    if (result.error) {
      return res.status(404).json({
        success: false,
        error: result.error,
      });
    }

    // 201 for new item, 200 for updated item
    const statusCode = result.created ? 201 : 200;

    return res.status(statusCode).json({
      success: true,
      data: result.cartItem,
    });
  }
  get(req, res) {
    const userID = req.userID;

    const items = CartItemModel.get(userID);
    return res.status(200).send(items);
  }
  delete(req, res) {
    const userID = req.userID;
    const cartItemID = req.params.id;
    const error = CartItemModel.delete(cartItemID, userID);
    if (error) {
      return res.status(404).send(error);
    }
    return res.status(200).send("Cart Item is removed");
  }
}
