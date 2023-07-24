const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const {conflict,created, internalServerError} = require('../response/apiResponse')
const ApiResponseMessages = require("../response/apiResponseMessages");


//SIGNUP   
exports.signUp = async(req, res, next) =>{
    try{
    const {username, email} = req.body;
    const existingUser = await User.findOne({username},{email});
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

// exports.signIn = async(req, res){
//     try{
//         const {username, password} = req.body
//     }
// }