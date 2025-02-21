import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

function Signup() {
  var [name,setName]=useState("")
  var [email,setEmail]=useState("")
  var [pass,setPass]=useState("")
  var [cpass,setCpass]=useState("")
  return (
    <div>
      <h1>Signup Page</h1>
      <form action="">
          UserName: <input type="text" id="uname" placeholder="Name" onChange={(e)=>setName(e.target.value)} required/>
          <h3>The Name is: {name} </h3>
          Email: <input type="email" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
          <h3>The Email is: {name} </h3>
          Password: <input type="password" id="password" placeholder="password" onChange={(e)=>setPass(e.target.value)} required/>
          <br />
          Confirm Password: <input type="password" placeholder="confirm password" onChange={(e)=>setCpass(e.target.value)} required/>
          <br />
          <button type="submit">SignUp</button>
      </form>
      <p>Already have an account? <Link to='/login'>Login</Link> </p>
    </div>
  )
}

export default Signup
