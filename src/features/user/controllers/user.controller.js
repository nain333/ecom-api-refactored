 import UserModel from "../models/user.model.js";
 import jwt from "jsonwebtoken";

 export default class UserController{
    static signUp(req, res, next) {
    try {
        const { name, email, password, type } = req.body;

        const user = UserModel.signUp(
            name,
            email,
            password,
            type
        );

        return res.status(201).json({
            success: true,
            data: user,
        });

    } catch (err) {
        return next(err);
    }
}
    static signIn(req, res, next) {
    try {

        const user = UserModel.signIn(
            req.body.email,
            req.body.password
        );

        const token = jwt.sign(
            {
                userID: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "364d",
            }
        );

        return res.status(200).json({
            success: true,
            token,
        });

    } catch (err) {
        return next(err);
    }
}
 }
 