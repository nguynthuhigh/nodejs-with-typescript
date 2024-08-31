import Sequelize from "sequelize";
import sequelize from "../database/mysql.database";

const User = sequelize.define('User',{
    _id:{
        type:Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:{
            name:'email',
            msg:'Email đã tồn tại'
        },
       
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

},{
    indexes:[{
        unique: true,
        fields: ['email'],
      },]
})

export default User
