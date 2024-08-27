import User from "../../models/user.model";
class AuthServices{
    static signUp = async()=>{
        const data = await User.create({userID:1})
        console.log(data)
        return data
    }
}
export default AuthServices