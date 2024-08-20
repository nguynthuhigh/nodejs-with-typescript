import express ,{Express,Request,Response} from "express"
import { configDotenv } from "dotenv"
import router from "./routers"
import handleError from "./middlewares/handleError.middleware"
configDotenv()
const app:Express = express()
const port = 8888

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
    console.log(process.env.SECRET_KEY)
})
app.use('/api/v1',router)
app.use(handleError)
app.get('/',(req:Request,res:Response)=>{
    res.send("Hello")
})