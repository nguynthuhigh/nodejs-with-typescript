import { Request,Response,NextFunction } from "express"
const catchAsync = func=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        func(req,res,next)?.catch(next)
    }
}
export default catchAsync