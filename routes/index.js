var express=require('express');
var router=express.Router();
var Cam =require('../models/cam');

router.get('/api/cams', function(req,res){
    Cam.find(function(err,cams){
        if(err) return res.status(500).send({error:'database failure'});
        res.json(cams);
    })
});
router.get('/api/cams/:accId', function(req,res){
   Cam.find({accId:req.params.accId},function(err, cams){
       if(err) return res.status(500),json({error:err});
       if(!cams) return res.status(404).json({error:'선택한 사건에 대한 데이터가 없습니다'});
       res.json(cams);
   })
});
router.post('/api/cams', function(req,res){
    var cam= new Cam();
    cam.accId=req.body.accId;
    cam.answer1=req.body.answer1;
    cam.answer2=req.body.answer2;
    cam.answer3=req.body.answer3;
    cam.sex=req.body.sex;
    cam.age=req.body.age;
    cam.probation=req.body.probation;
    cam.comment=req.body.comment;
    
    cam.save(function(err){
        if(err){
            console.error(err);
            res.json({result:0});
            return;
        }
        res.json({result:1});
    });
});

module.exports=router;