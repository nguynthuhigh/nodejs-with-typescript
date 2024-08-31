import User from "../../models/user.model";
class AuthServices{
    static signUp = async({email,password})=>{
        const data = await User.create({email,password})
        console.log(data)
        return data
    }
}
export default AuthServices