import jwt from "jsonwebtoken";

export const createToken = (id:string)=>{
    const refreshToken = jwt.sign(id,process.env.JWT_SECRET_KEY,{
        expiresIn: '15m'
    })
    const accessToken = jwt.sign(id,process.env.JWT_SECRET_KEY,{
        expiresIn: '30d'
    })
    return {accessToken,refreshToken}
}