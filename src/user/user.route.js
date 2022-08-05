const express = require("express");
var userRouter=express.Router();
const userController=require('./user.controller');
userRouter.get('/getuserdata',(request,response)=>{
  //  response.send("from routes.js")
  userController.getUsers(request,response);
});

userRouter.post('/savestudent',(request,response)=>{
  //  response.send("from routes.js")
  userController.saveStudent(request,response);
});
module.exports = userRouter;