const express = require("express");
var userRouter=express.Router();
const userController=require('./user.controller');

userRouter.get('/getuserdata',(request,response)=>{
  //  response.send("from routes.js")
  userController.getUsers(request,response);
});

userRouter.post('/savestudent',(request,response)=>{
  userController.saveStudent(request,response);
});

userRouter.get('/getStudentDetail',(request,response)=>{
  userController.getStudentDetail(request,response);
});

userRouter.post('/updateStudentDetail',(request,response)=>{
  userController.updateStudentDetail(request,response);
});


module.exports = userRouter;