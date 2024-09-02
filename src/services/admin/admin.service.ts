import AppError from "../../core/error";
import { Admin, IAdmin } from "../../models/admin.model";
import UserType from "../../types/user";
import bcrypt from "../../utils/bcrypt";
class AdminService{
    email:string
    password:string
    full_name:string
    username:string
    constructor({email,password,full_name,username}){
        this.email = email
        this.password = password
        this.full_name = full_name
        this.username = username
    }
    async addNewAdmin(){
        const passwordHash = await bcrypt.hash(this.password)
        const data = await Admin.create({email:this.email,password:passwordHash,full_name:this.full_name})
        return data
    }
    async adminLogin (){
        const data = await Admin.findOne({where:{email:this.email},raw:true}) as IAdmin
        if (!data) {
            throw new AppError('Email or password is wrong', 400);
          }
        if(!await bcrypt.compare(this.password,data.password)){
            throw new AppError('Email or password is wrong',400)
        }
    }
}
export default AdminService