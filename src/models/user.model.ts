import Sequelize from "sequelize";
import sequelize from "../database/mysql.database";


const User = sequelize.define('User',{
    _id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    user_name:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    //hash
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    image:{
        type:Sequelize.STRING,
        allowNull:true,
    },

})

export default User
