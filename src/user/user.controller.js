const registeredStudentModel = require("./user.model")

exports.getUsers= (req,res)=>{
    res.status(200).send({sucess:true,data:"prajkta"});
}

exports.saveStudent=(req,res)=>{
console.log("studnet data",req.body);
try{
const studnetdetail =new registeredStudentModel.default({
    name:req.body.name,
    contact:req.body.contact,
    gender:req.body.gender
});
studnetdetail.save();
res.status(200).send({sucess:true,data:"studnetdata prajkta"});
} catch(error){
    console.log("try catch error",error);
}
}