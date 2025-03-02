const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const app = express();

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173',  // Allow requests only from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization','x-access-token'],
  credentials: true
}));

// Explicitly set CORS headers for all responses
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(204); // Preflight request handling
//   }
//   next();
// });

  
app.use(express.json())
const PORT = 3001;
dotenv.config();

mdb.connect("mongodb://127.0.0.1:27017/sjit")   //if doesnt connect use this inside paranthesis- "mongodb://127.0.0.1:27017/sjit" which is local compass
  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log("Check your Connection String", err);
  });


app.get("/", (req, res) => {
    res.send("<h1>Welcome to Backend Server Hehekeke </h1>");
});

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({ auth: false, message: "Token required" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ auth: false, message: "Invalid token" });
    }
    req.userId = decoded.id;
    next();
  });
};


app.get("/isUserAuth",verifyJWT,async(req,res)=>{
  res.send("you are Authenticated!!!!!!")
})

app.get("/getUserDetails", verifyJWT, async (req, res) => {
  try {
    const user = await Signup.findById(req.userId).select("-password"); // Exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user details" });
  }
});


app.post("/login",async(req,res)=>{
  try{
    const {email,password}=req.body
    // console.log(email,password)
    const user=await Signup.findOne({email:email})
    if(!user){
      return res.status(400).json({auth:false,message:"Invalid User",isLogin:false});
    }
    const pass=await bcrypt.compare(password,user.password);
    if(!pass){
      return res.status(400).json({auth:false,message:"Invalid Password",isLogin:false})
    }
    // console.log(email,password)
    const payload={
        id:user._id,
        firstname:user.firstName,
        email:user.email
    }
    const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"15m"})
    console.log(token)
    res.json({isLogin:true,auth:true,token:token,user:user,message:"Login Successful"})
    console.log("Login Successful")
    // res.status(201).json({message:"Login Successful",isLogin:true,token:token}) 
  }
  catch(error){
    console.log("Login Unsuccessful")
    res.status(400).json({auth:false,message:"Login UnSuccessful",isLogin:false})
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
        await newSignup.save()
        console.log("Signup Successful")
        res.status(201).json({message:"Signup Successful",isSignup:true})
    }
    catch(error){
        res.status(400).json({message:"Signup UnSuccessful",isSignup:false})
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

// const verifyTok=(req,res,next)=>{
//   console.log("Middleware Check");
//   const token=req.headers.authorization
  
//   if(!token){
//     res.json("Request Denied")
//   }
//   try{
//     console.log(token)
//     console.log(jwt.verify(token,process.env,SECRET_KEY))
//     console.log(payload,firstname)
//     req.firstname=payload.firstname
//     next() 
//   }
//   catch(err){
//     console.log("Error Occurred")
//     res.send("Either token is expired/Token is itself wrong")
//     console.log(payload)
//   }
// }

// app.get('/getsignupdetails',verifyTok,(req,res)=>{
//   const signup=Signup.find()
//   console.log(signup)
//   res.send("Signup details fetched")
// })


// const verifyTok = (req, res, next) => {
//   console.log("Middleware Check");
//   // const token = req.headers.authorization; // Token should be in "Bearer <token>" format
//   const token=req.headers.authorization
//   if (!token) {
//     return res.status(401).json({ message: "Request Denied. Token missing." });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     console.log(decoded);
//     req.firstname = decoded.firstname;
//     next();
//   } catch (err) {
//     console.log("Error Occurred:", err.message);
//     return res.status(403).json({ message: "Invalid or expired token." });
//   }
// };


// app.get('/getsignupdetails', verifyTok, async (req, res) => {
//   try {
//     const signupDetails = await Signup.find();
//     res.status(200).json(signupDetails);
//   } catch (error) {
//     console.log("Error fetching signup details:", error);
//     res.status(500).json({ message: "Error fetching signup details" });
//   }
// });



app.listen(PORT, () => console.log("Server Started Successfully"));  //  to let know the app that through this port only we are running
