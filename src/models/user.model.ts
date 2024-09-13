import Sequelize, { Model } from "sequelize";
import sequelize from "../database/mysql.database";


export interface IUser{
    _id:string,
    full_name:string,
    email:string,
    username:string,
    password:string,
    image:string,
    active:string
}
export const User = sequelize.define<Model<IUser>>('User',{
    _id:{
        type:Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    full_name:{
        type:Sequelize.STRING,
        allowNull:true,
        defaultValue:null
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:{
            name:'email',
            msg:'Email đã tồn tại'
        }
    },
    username:{
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
    indexes:[{
        unique: true,
        fields: ['email'],
      },]
})

