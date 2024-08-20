import AppError from "../../core/error";

const authController = {
    testAuth: (req, res) => {
        throw new AppError('Error',200)
    }
}

export default authController;
