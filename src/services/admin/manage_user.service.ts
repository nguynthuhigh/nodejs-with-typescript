'use strict'
import User from "../../models/user.model";
import bcrypt from "../../utils/bcrypt";
class ManageUserService{
    static addNewUser = async({email,password})=>{
        const passwordHash = await bcrypt.hash(password)
        console.log(passwordHash)
        const data = await User.create({email:email,password:passwordHash})
        return data
    }
}
export default ManageUserService