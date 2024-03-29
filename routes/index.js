var express = require('express');
var router = express.Router();      //Not using app as it is already been used in app.js file
const userModel = require("./users");

router.get('/',function(req,res){
  res.render("index",{title: 'vrinda'});
})

router.get('/create',function(req,res){
  userModel.create()
})

module.exports = router;
