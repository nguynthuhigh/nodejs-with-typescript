class AppError extends Error{
    public http_code:number
    constructor(message:string,http_code:number){
        super(message)
        this.message = message,
        this.http_code = http_code
        Error.captureStackTrace(this, this.constructor)
    }
}
export default AppError