const jwt = require("jsonwebtoken");

export const gentoken =async(userId) =>{
   try{
    let token = await jwt.sign({userId},process.env.JWT_SECRETC,{expiresIn:"7d"})
    return token
   }
   catch(error){
        console.log("token error")
   }

}
