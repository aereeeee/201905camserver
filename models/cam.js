var mongoose=require('mongoose');
var Schema= mongoose.Schema;
var {autoIncrement}= require('mongoose-plugin-autoinc');
var Schema=new Schema({
    "accId":Number,
    "answer1":Number,
    "answer2":Number,
    "answer3":Number,
    "sex":Number,
    "age":Number
});
Schema.plugin( autoIncrement , { model : 'cam' , field : 'id' , startAt : 1 });
module.exports = mongoose.model('cam', Schema);