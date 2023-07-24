const express = require('express');
const {signUp, signIn, getUserDetails} = require('../controllers/userController');

const router =  express.Router()

router.route('/users').post(signUp);
router.route('/users').post(signIn);
router.route('/users').get(getUserDetails);


module.exports = router;