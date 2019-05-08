var express=require('express');
var router=express.Router();
// var cam =require('../models/cam');

router.get('/api/cams', function(req,res){
    res.send('result')
});
router.get('/api/cams/:accId', function(req,res){
    res.end();
});
router.post('/api/cams', function(req,res){
    res.end();
});

// router.post('/')
module.exports=router;