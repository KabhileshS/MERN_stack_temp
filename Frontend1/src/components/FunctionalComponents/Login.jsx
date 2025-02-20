import { useEffect,useState } from "react"
function Login() {
  var [email,setEmail]=useState("")
  var [pass,setPass]=useState("")

  return (
    <div>
      <form action="">
          <h1>Login Page</h1>
          Email: <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          <h3>The Email is: {email} </h3>
          Password: <input type="password" placeholder="password" onChange={(e)=>setPass(e.target.value)} />
          <br />
          <br />
          <button>Login</button>
       </form>
    </div>
  )
}

export default Login
