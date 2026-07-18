import UserService from "../services/user.service.js";

export default class UserController {
    static async signUp(req, res) {
        const user = await UserService.signUp(req.body);

        return res.status(201).json({
            success: true,
            data: user,
        });
    }

    static async signIn(req, res) {
        const result = await UserService.signIn(
            req.body.email,
            req.body.password
        );

        return res.status(200).json({
            success: true,
            token: result.token,
            user: result.user,
        });
    }

    static async getAllUsers(req, res) {
        const users = await UserService.getAllUsers();

        return res.status(200).json({
            success: true,
            data: users,
        });
    }

    static async getUserById(req, res) {
        const user = await UserService.getUserById(req.params.id);

        return res.status(200).json({
            success: true,
            data: user,
        });
    }
}    