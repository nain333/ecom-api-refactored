import "./src/config/env.config.js"
import app from "./src/app.js"




    
// specify port 
const  PORT = process.env.PORT;
app.listen(process.env.PORT||3200,()=>{
    console.log(`server is running on port  :  ${PORT}`)
});

