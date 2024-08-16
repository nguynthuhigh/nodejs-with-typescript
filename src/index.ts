import express ,{Express,Request,Response} from "express"
import { configDotenv } from "dotenv"

configDotenv()
const app:Express = express()
const port = 3000

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
    console.log(process.env.SECRET_KEY)
})

app.get('/',(req:Request,res:Response)=>{
    res.send("Hello")
})