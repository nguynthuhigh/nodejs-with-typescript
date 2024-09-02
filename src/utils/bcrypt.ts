'use strict'
import bcrypt from 'bcrypt';
import AppError from '../core/error';
const hash =async  (password:string)=>{
    try {
        return await bcrypt.hash(password,10)
    } catch (error) {
        console.log(error)
        throw new AppError('Error system',500)
    }
}
const compare = async (password:string,passwordHash:string)=>{
    return await bcrypt.compare(password,passwordHash)
}

export default{
    hash,
    compare
}