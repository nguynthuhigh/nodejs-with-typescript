'use strict'
import {IUser, User} from "../../models/user.model";
import bcrypt from "../../utils/bcrypt";
class ManageUserService{
    static addNewUser = async({email,password})=>{
        const passwordHash = await bcrypt.hash(password)
        const data = await User.create({email:email,password:passwordHash})
        return data
    }
    static getAllUsers = async(page:number,limit:number)=>{
        const offset = (page -1) * limit
        //,limit:limit,offset:offset
        const data = await User.findAll({ 
            raw: true,
            order:[['createdAt','DESC']]
        })
        return data
    }
    static editProfileUser = async(body:IUser)=>{
        delete body.active
        const data = await User.update(
            {...body},
            { 
            where:{
                _id:body._id
            }
        })
        return data
    }
    static banUser = async(body:IUser)=>{
        const data = await User.update(
            {active: body.active},
            { 
            where:{
                _id:body._id
            },
        })
        console.log(data)
    }
}
export default ManageUserService