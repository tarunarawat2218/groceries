const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.findExistingUserByEmail = async (email) => {
    return User.findOne({email});
};

exports.findExistingUserByUserName = async (username) => {
    return User.findOne({username});
};

exports.findExistingUserByID = async (id) => {
    return User.findOne({_id: id});
};

exports.createHashPassword = (password) => {
    return bcrypt.hash(password, 10);
};

exports.createAUser = async (username, email, password) => {
    const hashedPassword = await exports.createHashPassword(password);
    const newUser = new User({
        username, email, password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    return savedUser;
};

exports.checkUserPassword = async (password, savedPassword) => {
    return bcrypt.compare(password, savedPassword);
};

exports.createToken = async (userId) => {
    console.log("createToken")
    console.log(userId)
    const token = jwt.sign(
        {userId},
        process.env.JWT_SECRET_KEY || '',
        {expiresIn: '99h'}
    );
    return token;
};

exports.getUserIdFromToken =  (authorization) => {
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY??"")
    return decodedToken.userId;
}
exports.getExpFromToken =  (authorization) => {
    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY??"")
    return decodedToken.exp;
}
