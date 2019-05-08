var express=require('express');
var app= express();
var mongoose=require('mongoose');
var logger=require('morgan');
var bodyParser=require('body-parser');

var db=mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
    console.log('mongodb connect');
});
mongoose.connect('mongodb://127.0.0.1:27017/db', { useMongoClient: true });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var port=3000;

var router=require('./routes');

app.listen(port, function(){
    console.log('Express listening on port', port);
})
