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

exports.getStudentDetail=(req,res)=>{
//     .limit(10);
// .skip((page - 1) * limit)
  registeredStudentModel.default.find({ name: "prajkta"}, function(err, resp){
    console.log("studentdetail",resp);
    res.status(200).send({data:resp});

   });

}

exports.updateStudentDetail=(req,res)=>{
   
    const condition={contact : req.body.contact}
      registeredStudentModel.default.findOneAndUpdate({ name: req.body.name}, { $set: condition }, { new: true }, function(err, resp){
        console.log("studentdetail",resp);
        res.status(200).send({data:"record updated"});
    
    });
    
}