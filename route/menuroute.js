const express=require('express');

// here we using express and route

const app=express();
const menuRoute=express.Router();


// here import
let menuModel=require('../model/Menu');



menuRoute.route('/').get(function(req,res){
     
     menuModel.find(function(err,menudata){
         if(err) 
            throw console.log("error in controller",err);
         else
            res.json(menudata);

     })
 })




menuRoute.route('/addMenu').post(function(req,res){
    
     let menu=new menuModel(req.body);
     console.log(req.body);
     menu.save()
     .then(game=>{res.status(200).json({'menu':'Menu Added Successfully'})})
     .catch(err=>{res.status(400).send("Someting went wrong ....")})
})

menuRoute.route('/getMenuById/:id').get(function(req,res){
    let id=req.params.id;
    menuModel.findById(id,function(err,menudata){

        res.json(menudata);
    })
})

menuRoute.route('/updateMenu/:id').put(function(req,res){
   menuModel.findById(req.params.id,function(err,menudata){
        if(!menudata)//null   
        {
            return next(new Error('Unable to find Menu'));
        }else
        {
           menudata.id=req.body.id;
           menudata.title=req.body.title;
           menudata.category=req.body.category;
           menudata.price=req.body.price;
           menudata.img=req.body.img;
           menudata.save()
            .then(  emp=>{  res.json("Menu Updated Sucessfully.")})
            .catch(err=>{  res.status(400).send("Unable to Update Menu")})
        }
   })
})

menuRoute.route('/deleteMenu/:id').delete(function(req,res){
   menuModel.findByIdAndRemove({_id:req.params.id},function(err,menudata){
        if(err) 
            res.json(err)
        else  
            res.json('Menu Deleted Successfully..')
   })
})

module.exports=menuRoute;