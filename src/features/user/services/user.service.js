import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserRepository from "../repositories/user.repository.js";

import ConflictError from "../../../errors/conflict-error.js";
import NotFoundError from "../../../errors/not-found.error.js";
import UnauthorizedError from "../../../errors/unauthorized-error.js";

class UserService {
    async signUp(userData) {
        const existingUser = await UserRepository.findByEmail(userData.email);

        if (existingUser) {
            throw new ConflictError("Email already exists.");
        }

        const hashedPassword = await bcrypt.hash(userData.password, 12);

        const user = await UserRepository.create({
            ...userData,
            password: hashedPassword,
        });

        const userResponse = user.toObject();

        delete userResponse.password;

        return userResponse;
    }

    async signIn(email, password) {
        const user = await UserRepository.findByEmail(email);

        if (!user) {
            throw new UnauthorizedError("Invalid email or password.");
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            throw new UnauthorizedError("Invalid email or password.");
        }

        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "364d",
            }
        );

        const userResponse = user.toObject();

        delete userResponse.password;

        return {
            token,
            user: userResponse,
        };
    }

    async getAllUsers() {
        return await UserRepository.findAll();
    }

    async getUserById(id) {
        const user = await UserRepository.findById(id);

        if (!user) {
            throw new NotFoundError("User not found.");
        }

        return user;
    }
}

export default new UserService();