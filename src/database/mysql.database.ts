import { Sequelize } from "sequelize";
//need add env
const sequelize = new Sequelize('new_schema', 'root', '123123123', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306 
  });

export default sequelize
