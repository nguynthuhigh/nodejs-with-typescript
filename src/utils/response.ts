import { Response } from "express"
const sendResponse =  (res:Response,message:string,data:unknown,status:number)=>{
    return res.status(status).json({message:message,data:data})
}

export default sendResponse