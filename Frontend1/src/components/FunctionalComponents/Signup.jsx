import { useState,useEffect } from "react"

function Signup() {
  var [name,setName]=useState("")
  var [email,setEmail]=useState("")
  var [pass,setPass]=useState("")
  var [cpass,setCpass]=useState("")
  return (
    <div>
      <h1>Signup Page</h1>
      <form action="">
          UserName: <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
          <h3>The Name is: {name} </h3>
          Email: <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          <h3>The Email is: {name} </h3>
          Password: <input type="password" placeholder="password" onChange={(e)=>setPass(e.target.value)} />
          <br />
          Confirm Password: <input type="password" placeholder="confirm password" onChange={(e)=>setCpass(e.target.value)} />
          <br />
          <button onClick={()=>setCpass()}>SignUp</button>
      </form>
    </div>
  )
}

export default Signup
