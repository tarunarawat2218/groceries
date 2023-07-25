const UserService = require('../service/userService')
const ApiResponse = require('../response/apiResponse');
const ApiResponseMessages = require("../response/apiResponseMessages");


//SIGNUP   
exports.signUp = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const existingUser = await UserService.findExistingUserByEmail(email);
        if (existingUser) {
            ApiResponse.conflict(res, ApiResponseMessages.USER_ALREADY_EXISTS)
        }
        const savedUser = await UserService.createAUser(username, email, password)
        // Send a success response
        ApiResponse.created(res, savedUser, ApiResponseMessages.USER_CREATED_SUCCESSFULLY)
    } catch (error) {
        // Handle any errors that occur during user signup
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR, error)
    }
}

//SIGNIN
exports.signIn = async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await UserService.findExistingUserByUserName(username);
        if (!user) {
            ApiResponse.unauthorized(res, user, ApiResponseMessages.USER_NOT_FOUND)
        }
        const isPasswordMatch = await UserService.checkUserPassword(password, user.password)
        if (!isPasswordMatch) {
            ApiResponse.unauthorized(res, isPasswordMatch, ApiResponseMessages.INVALID_CREDENTIALS)
        }
        const token = await UserService.createToken(user._id)

        ApiResponse.success(res, {token}, ApiResponseMessages.LOGIN_SUCCESSFULLY)
    } catch (e) {
        console.log(e)
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR, e)
    }
}

//GET User DEtails
exports.getUserDetails = async (req, res) => {
    try {
        const {authorization} = req.headers;
        console.log(authorization)
        const userId =  UserService.getUserIdFromToken(authorization)
        console.log(userId)
        const user = await UserService.findExistingUserByID(userId)
        if (!user) {
            return ApiResponse.notFound(res, ApiResponseMessages.USER_NOT_FOUND)
        }
        console.log(user)
        ApiResponse.success(res, user, ApiResponseMessages.USER_FOUND)
    } catch (e) {
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR, e)
    }
}


