import Sequelize from "sequelize";
import sequelize from "../database/mysql.database";


const Product = sequelize.define('Product',{
    idProducts:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        
    }
})

export default Product
