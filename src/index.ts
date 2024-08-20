import express ,{Express,Request,Response} from "express"
import { configDotenv } from "dotenv"
import router from "./routers"
import handleError from "./middlewares/handleError.middleware"
import sequelize from "./database/mysql.database"
configDotenv()
const app:Express = express()
const port = 8888

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
app.use('/api/v1',router)
app.use(handleError)
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
app.get('/',(req:Request,res:Response)=>{
    res.send("Hello")
})