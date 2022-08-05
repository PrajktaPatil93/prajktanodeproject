
exports.getUsers= (req,res)=>{
    res.status(200).send({sucess:true,data:"prajkta"});
}

exports.saveStudent=(req,res)=>{
console.log("studnet data",req.body)
res.status(200).send({sucess:true,data:"studnetdata prajkta"});
}