const ApiResponse = require('../response/apiResponse');
const ApiResponseMessages = require("../response/apiResponseMessages");
const UserService = require('../service/userService')

exports.checkAuthorizationHeaders = (
    req,
    res,
    next,
) => {
    const {authorization} = req.headers;

    if (!authorization) {
        ApiResponse.unauthorized(res, ApiResponseMessages.UNAUTHORIZED);
    }
    const exp = UserService.getExpFromToken(authorization)
    if (Date.now() >= exp * 1000) {
        return ApiResponse.unauthorized(res, ApiResponseMessages.TOKEN_EXPIRED);
    }

    next();
}