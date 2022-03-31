const express=require('express');

// here we using express and route

const app=express();
const userRoute=express.Router();


// here import
let userModel=require('../model/User');



userRoute.route('/').get(function(req,res){
     
     userModel.find(function(err,userdata){
         if(err) 
            throw console.log("error in controller",err);
         else
            res.json(userdata);

     })
 })


userRoute.route('/addUser').post(function(req,res){
    
     let user=new userModel(req.body);
     console.log(req.body);
     user.save()
     .then(game=>{res.status(200).json({'user':'User Added Successfully'})})
     .catch(err=>{res.status(400).send("Someting went wrong ....")})
})

userRoute.route('/editUser/:id').get(function(req,res){
    let id=req.params.id;
    userModel.findById(id,function(err,userdata){

        res.json(userdata);
    })
})

userRoute.route('/updateUser/:id').put(function(req,res){
   userModel.findById(req.params.id,function(err,userdata){
        if(!userdata)//null   
        {
            return next(new Error('Unable to find Product'));
        }else
        {
           userdata.userName=req.body.userName;
           userdata.email=req.body.email;
           userdata.password=req.body.password;
           userdata.confirmPassword=req.body.confirmPassword;
           userdata.adminfound=req.body.adminfound;
           userdata.save()
            .then(  emp=>{  res.json("User Updated Sucessfully.")})
            .catch(err=>{  res.status(400).send("Unable to Update User")})
        }
   })
})

userRoute.route('/deleteUser/:id').delete(function(req,res){
   userModel.findByIdAndRemove({_id:req.params.id},function(err,logindata){
        if(err) 
            res.json(err)
        else  
            res.json('User Deleted Successfully..')
   })
})

module.exports=userRoute;