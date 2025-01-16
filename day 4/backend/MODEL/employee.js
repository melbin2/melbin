const mongoose = require('mongoose');
var schema =mongoose.Schema({
    name:String,
    age:Number,
    Department:String,
    Salary:Number
})

var Employeemodel=mongoose.model("employees",schema)
module.exports =Employeemodel;
