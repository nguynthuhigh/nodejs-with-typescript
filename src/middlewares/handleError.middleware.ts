import { Request,Response,NextFunction } from "express"
import AppError from "../core/error"
export default function handleError(error:AppError,req:Request,res:Response,next:NextFunction) {
    //need optimize
    console.log(error)
    res.status(error.http_code || 500).json({error:error.message})
}