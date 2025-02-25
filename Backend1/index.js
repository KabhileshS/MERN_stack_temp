const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema")
const app = express();
app.use(express.json())
const PORT = 3001;
dotenv.config();

mdb.connect("mongodb+srv://kabhilesh14:kabhilesh14@cluster0.psjy1hg.mongodb.net/sjit")   //if doesnt connect use this inside paranthesis- "mongodb://127.0.0.1:27017/sjit" which is local compass
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log("Check your Connection String", err);
  });

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Backend Server Hehekeke </h1>");
});

app.post("/signup",(req,res)=>{
    try{
        const {firstName,lastName,email,password,phoneNumber}=req.body
        const newSignup= new Signup({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
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

app.listen(PORT, () => console.log("Server Started Successfully"));
