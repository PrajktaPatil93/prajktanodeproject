const { mongoose } = require("mongoose")

const registeredStudentSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    contact:{
        type:String,
    },
    gender:{
        type:String,
    },
}, {timestamps:true}); // timestamp will add default column like createdat and updatedat in table

exports.default = mongoose.model('registeredStudent',registeredStudentSchema); //first param table name in db, second param is object of the schema which is object used in model