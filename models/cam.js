var mongoose=require('mongoose');
var Schema= mongoose.Schema;
var {autoIncrement}= require('mongoose-plugin-autoinc');
var Schema=new Schema({
    accId:{
        type : Number,
        required: true
    },
    answer1:{
        type : Number,
        required: true
    },
    answer2:{
        type : Number,
        required: true
    },
    answer3:{
        type : Number,
        required: true
    },
    sex:{
        type : Number,
        required: true
    },
    age:{
        type : Number,
        required: true
    },
    probation:{
        type : Number,
        required: true
    },
    comment:{
        type : String,
        validate:[
            function(comment){
             return comment.length<101;
            },'공백 포함 100자 이내로 작성해주세요!'
           ]
    },
});
Schema.plugin( autoIncrement , { model : 'cam' , field : 'id' , startAt : 1 });
module.exports = mongoose.model('cam', Schema);