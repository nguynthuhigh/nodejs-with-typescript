import { createPool } from "mysql2";

const pool = createPool({
    host:'',
    user:'root',
    password:'',
    database:'',
    connectionLimit:10,
    connectTimeout:10000,
})