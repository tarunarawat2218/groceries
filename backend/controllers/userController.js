const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {conflict,created, internalServerError, unauthorized, notFound, success} = require('../response/apiResponse')
const ApiResponseMessages = require("../response/apiResponseMessages");


//SIGNUP   
exports.signUp = async(req, res) =>{
    try{
    const {username, email, password} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        conflict(res, ApiResponseMessages.USER_ALREADY_EXISTS )
    }
    const hashedPassword =  await bcrypt.hash(password ,10)
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
  
      // Save the user to the database
      const savedUser = await newUser.save();
  
      // Send a success response
      created(res, savedUser, ApiResponseMessages.USER_CREATED_SUCCESSFULLY)
    }catch (error) {
      // Handle any errors that occur during user signup
      internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR)
    }
}
//    

//SIGNIN
exports.signIn = async(req, res) =>{
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            unauthorized(res, user, ApiResponseMessages.USER_NOT_FOUND)
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch){
            unauthorized(res, isPasswordMatch, ApiResponseMessages.INVALID_CREDENTIALS)
        }
        const token = jwt.sign({userId:user.id}, secretKey, { expiresIn: '1h'})
        success(res, token, ApiResponseMessages.LOGIN_SUCCESSFULLY)
    }catch{
        internalServerError(res,ApiResponseMessages.INTERNAL_SERVER_ERROR)
    }
}

//GET User DEtails
exports.getUserDetails = async(req, res) =>{
    try{
        const {userId} = req.params;
 
        const user = await User.findById(userId)
        if(!user){
           return notFound(res,user, ApiResponseMessages.USER_NOT_FOUND)
        }
        success(res,ApiResponseMessages.USER_FOUND)
    }catch{
      internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR )
    }
}


