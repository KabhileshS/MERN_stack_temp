import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
function Login() {
  var [email,setEmail]=useState("")
  var [pass,setPass]=useState("")

  return (
    <div>
      <form action="">
          <h1>Login Page</h1>
          Email: <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
          <h3>The Email is: {email} </h3>
          Password: <input type="password" placeholder="password" onChange={(e)=>setPass(e.target.value)} required/>
          <br />
          <br />
          <button type="submit">Login</button>
       </form>
      <p>Create an Account ? <Link to='/signup' >Signup</Link> </p>
    </div>
  )
}

export default Login
