const express = require("express");
var router=express.Router();
const usermodule = require('./src/user/user.route');
router.get("/",function(request,response){
response.send("from routes.js")
})
router.get("/secroute",function(request,response){
response.send("from routes.js22")
})
router.use('/user',usermodule)
module.exports = router;