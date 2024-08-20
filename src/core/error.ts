class AppError extends Error{
    http_code:number
    constructor(message:string,http_code:number){
        super(message)
        this.message = message,
        this.http_code = http_code
    }
}
    //need optimize
export default AppError