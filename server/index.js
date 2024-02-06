const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/userModel')

const app =express()

app.use(express.json())
app.use(cors())

app.post('/signup', async(req,res)=>{
  const user = await User.findOne({email:req.body.email})
  if(!user){
     const result = await User.insertMany([req.body]) 
  console.log(result);
  res.json(result)
  }else{
    res.json({status:false})
  }
})

app.post('/login',async(req,res)=>{
    console.log(req.body);
   const user = await User.findOne({email:req.body.email}) 
   console.log(user);
   if(user==null){
     res.json({status:false})
   }else if(req.body.password === user.password){
     res.json({status:true,email:req.body.email})
   }else{
      res.json({status:false})
   }
  
})


app.listen(4000, ()=>{
    console.log("server started");
})

const connect = async() => {
   await mongoose.connect('mongodb+srv://intellectx303:5ss0TiQ5m5xXroML@cluster0.y3y3cjf.mongodb.net/?retryWrites=true&w=majority')
   console.log("database connected");
}
connect()