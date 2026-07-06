import CartItemModel from "../model/cartItems.model.js";
export class CartItemsController {
 add(req, res, next) {
  try {
    const { productID, quantity } = req.body;
    const userID = req.userID;

    const result = CartItemModel.add(productID, userID, quantity);

    const statusCode = result.created ? 201 : 200;

    return res.status(statusCode).json({
      success: true,
      data: result.cartItem,
    });

  } catch (err) {
    return next(err);
  }
}
  get(req, res) {
    const userID = req.userID;

    const items = CartItemModel.get(userID);
    return res.status(200).json({
      success:true,
      data:items
    });
  }
  delete(req, res, next) {
  try {
    const userID = req.userID;
    const cartItemID = req.params.id;

    CartItemModel.delete(cartItemID, userID);

    return res.status(200).json({
      success: true,
      message: "Cart item removed successfully.",
    });

  } catch (err) {
    return next(err);
  }
}
}
