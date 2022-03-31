const express=require('express');

// here we using express and route

const app=express();
const menunewRoute=express.Router();


// here we required menu model and imporeted
let menunewModel=require('../model/Menunew');



menunewRoute.route('/').get(function(req,res){
     
     menunewModel.find(function(err,menunewdata){
         if(err) 
            throw console.log("error in controller",err);
         else
            res.json(menunewdata);

     })
 })


 menunewRoute.route('/getMenuById/:id').get(function(req,res){
   let id=req.params.id;
   loginModel.findById(id,function(err,menunewdata){

       res.json(menunewdata);
   })
})

menunewRoute.route('/addMenu').post(function(req,res){
    
   let menunew=new menunewModel(req.body);
   console.log(req.body);
   menunew.save()
   .then(game=>{res.status(200).json({'menunew':'Menu Added Successfully'})})
   .catch(err=>{res.status(400).send("Someting went wrong ....")})
})

menunewRoute.route('/updateMenu/:id').put(function(req,res){
  menunewModel.findById(req.params.id,function(err,menunewdata){
       if(!menunewdata)//null   
       {
           return next(new Error('Unable to find Menu'));
       }else
       {
          menunewdata.mname=req.body.mname;
          menunewdata.description=req.body.description;
          menunewdata.price=req.body.price;
          menunewdata.save()
           .then(  emp=>{  res.json("Menu Updated Sucessfully.")})
           .catch(err=>{  res.status(400).send("Unable to Update menu")})
       }
  })
})

menunewRoute.route('/deleteMenu/:id').delete(function(req,res){
  menunewModel.findByIdAndRemove({_id:req.params.id},function(err,menunewdata){
       if(err) 
           res.json(err)
       else  
           res.json('Menu Deleted Successfully..')
  })
})

module.exports=menunewRoute;