import Sequelize from "sequelize";
import sequelize from "../database/mysql.database";


const product = sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        
    }
})