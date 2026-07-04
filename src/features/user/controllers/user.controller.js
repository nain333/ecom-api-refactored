 import UserModel from "../models/user.model.js";
 export default class UserController{
    static signUp(req,res){
        const {
            name,
            email,
            password,
            type
        }=req.body;
        const user = UserModel.signUp(name,email,password,type)
        res.status(201).send(user)

    }
    static signIn(req,res){
        const result = UserModel.signIn(req.body.email,
            req.body.password
        );
        if(!result){
            return res.status(400).send("Incorrect Credentials")
        }else{
            return res.send("Login Successful");
        }
    }
 }
 