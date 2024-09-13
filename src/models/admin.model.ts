import Sequelize, { Model } from "sequelize";
import sequelize from "../database/mysql.database";
export interface IAdmin{
    _id:string,
    full_name:string,
    email:string,
    password:string,
    image:string,
    active:string
}
export class Admin extends Model<IAdmin> implements IAdmin {
    public _id!:string
    public full_name:string
    public email!:string
    public password!:string
    public image:string
    public active:string
  }
  
// export const Admin = sequelize.define<Model<IAdmin>>('Admin',{
Admin.init({
    _id:{
        type:Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:{
            name:'email',
            msg:'Email đã tồn tại'
        },
    },
    full_name:{
        type:Sequelize.STRING,
        allowNull:true,
        defaultValue:null
    },
    //hash
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:true,
        defaultValue:null
    },
    active:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
},{
    sequelize, 
    modelName: 'Admin',
    tableName: 'admins',
    indexes:[{
        unique: true,
        fields: ['email'],
      },]
})

