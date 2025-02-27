const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema")
const bcrypt=require('bcrypt')
const cors=require('cors')
const jwt=require('jsonwebtoken')
const app = express();

app.use(cors({
  origin:['https://mern-stack-temp.vercel.app','http://localhost:3001'],
  methods:['GET','POST'],
  allowedHeaders:['Content-Type','Authorization']
}))

app.use(express.json())
const PORT = 3001;
dotenv.config();

mdb.connect(process.env.MONGODB_URL)   //if doesnt connect use this inside paranthesis- "mongodb://127.0.0.1:27017/sjit" which is local compass
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log("Check your Connection String", err);
  });


app.get("/", (req, res) => {
    res.send("<h1>Welcome to Backend Server Hehekeke </h1>");
});


app.post("/login",async(req,res)=>{
  try{
    const {email,password}=req.body
    // console.log(email,password)
    const user=await Signup.findOne({email:email})
    if(!user){
      return res.status(201).json({message:"Invalid User",isLogin:false});
    }
    const pass=await bcrypt.compare(password,user.password);
    if(!pass){
      return res.status(201).json({message:"Invalid Password",isLogin:false})
    }
    // console.log(email,password)
    const payload={
        firstName:user.firstName,
        email:user.email
    }
    const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1m"})
    console.log(token)

    console.log("Login Successful")
    res.status(201).json({message:"Login Successful",isLogin:true,token:token})
  }
  catch(error){
    console.log("Login Unsuccessful")
    res.status(400).json({message:"Login UnSuccessful",isLogin:false})
  }
})

app.post("/signup",async (req,res)=>{
    try{
        const {firstName,lastName,email,password,phoneNumber}=req.body
        const hashPassword= await bcrypt.hash(password,10)
        const newSignup= new Signup({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hashPassword,
            phoneNumber:phoneNumber,
        })
        newSignup.save()
        console.log("Signup Successful")
        res.status(201).json({message:"Signup Successful",isSignup:true})
    }
    catch(error){
        res.status(201).json({message:"Signup UnSuccessful",isSignup:false})
    }
})

// app.post('/login',async (req,res)=>{
//   try{    
//     const {Email,pass}=req.body 
//     const user=await Signup.findOne({email:Email})   
//     res.json(user)
//   }
//   catch(error){
//     console.log("Login Error")
//     res.status(400).json({message:"Login Error",isLogin:false})
//   }
// })

const verifyTok=(req,res,next)=>{
  console.log("Middleware Check");
  const token=req.headers.authorization
  
  if(!token){
    res.json("Request Denied")
  }
  try{
    console.log(token)
    
  }
  catch{

  }
  next()
}

app.get('/getsignupdetails',verifyTok,(req,res)=>{
  const signup=Signup.find()
  console.log(signup)
  res.send("Signup details fetched")
})


app.listen(PORT, () => console.log("Server Started Successfully"));
