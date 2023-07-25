const express = require('express');
const {signUp, signIn, getUserDetails} = require('../controllers/userController');
const {checkAuthorizationHeaders} = require('../middlewares/checkAuthorizationHeaders');

const router = express.Router()

router.post('/signup', signUp);
router.post('/login', signIn);
router.get('/user', checkAuthorizationHeaders, getUserDetails);


module.exports = router;