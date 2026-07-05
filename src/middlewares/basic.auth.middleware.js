import UserModel from "../features/user/models/user.model.js";
const basicAuth=(req,res,next)=>{
    // 1. check  if autharization headeris empty
    const authHeader=req.headers["authorization"];
    if(!authHeader){
        return res.status(401).send("No autharization details found")

    }
    // 2. Extract credentials
    const base64Credentials=authHeader.replace("Basic ","")
   
    // 3. decode credentials
    const decodedCreds  = Buffer.from(base64Credentials,"base64").toString("utf-8")
   
    const creds = decodedCreds.split(":");
    const user = UserModel.signIn(creds[0], creds[1]);
    if(user){
        next();
    } else{
        return res.status(401).send("incorrect Credentials")
    }
}
export default basicAuth;
