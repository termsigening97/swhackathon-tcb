var express = require('express')
var router = express.Router()
var passport = require('../config/passport.js')

var LoginController = require('../controller/loginController')
var Login = new LoginController()

router.get('/logout', (req,res)=>{
    req.logOut();
    res.send({
        state:'logout'
    })
})

router.get('/google', passport.authenticate('google', {scope:['profile']}))

router.get('/google/callback', passport.authenticate('google'), Login.userSignUp)

function authSuccess(req, res){
    console.log(req.user.provider);
    res.send({
        userInfo:req.user
    })
}


module.exports = router