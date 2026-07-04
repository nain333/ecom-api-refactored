export default class UserModel{
    constructor(name,email,password,type,id){
        this.name=name;
        this.email=email;
        this.password=password;
        this.type=type;
        this.id = id;

    }
    static signUp(name,email,password,type){
        const newUser= new UserModel(
            name,
            email,
            password,
            type
        )
        newUser.id=users.length+1;
        users.push(newUser);
        return newUser;
    }
    static signIn(email,password){
        const user = users.find(u=>u.password==password);
        return user;
    }
}

const users = [{
    "id":1,
    "name":"Admin User",
    "email":"admin@ecom.com",
    "password":"password1",
    "type":"seller",


}]