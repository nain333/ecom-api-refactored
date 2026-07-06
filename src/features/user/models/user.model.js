import ConflictError from "../../../errors/conflict-error.js";
import NotFoundError from "../../../errors/not-found.error.js";
import UnauthorizedError from "../../../errors/unauthorized-error.js";
import { getNextId } from "../../../utils/id-generator.js";
export default class UserModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this.id = id;
  }

  static signUp(name, email, password, type) {
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      throw new ConflictError("Email already exists.");
    }
    let newUserId = getNextId(users);
    const newUser = new UserModel(name, email, password, type, newUserId);

    users.push(newUser);

    return newUser;
  }

  static signIn(email, password) {
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );
    if (!user) {
      throw new UnauthorizedError("Invalid email or password");
    }

    return user;
  }
  static getAll() {
    return users;
  }
  static getById(id){
    const user= users.find((user)=>Number(id)===user.id);
    if(!user){
        throw new NotFoundError("User not found.")
    }
    return user;
  }
}



let users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@ecom.com",
    password: "password1",
    type: "seller",
  },
  {
    id: 2,
    name: "customer User",
    email: "costumer@ecom.com",
    password: "password1",
    type: "customer",
  },
];
