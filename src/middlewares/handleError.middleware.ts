import { Request,Response,NextFunction } from "express"
import AppError from "../core/error"
export default function handleError(error:AppError,req:Request,res:Response,next:NextFunction) {
    //need optimize
    res.json({error:error.message})
}