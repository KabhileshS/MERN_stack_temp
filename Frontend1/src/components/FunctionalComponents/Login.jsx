import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Login() {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPass]=useState("")

  const handleLogin=async(event)=>{
    event.preventDefault()
    const req=await axios.post("https://mern-stack-temp.onrender.com/login",{
      email:email,
      password:password
    })
    const message=req.data.message
    const isLogin=req.data.isLogin
    if(isLogin){
      alert(message)
      navigate('/')
    }else{
      alert(message)
    }
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>Login Page</h1>
        <label htmlFor="email">   Email :  </label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <br />
        <br />
        <label htmlFor="password">   Password:  </label>
        <input type="password" id="password" value={password} onChange={(e)=>setPass(e.target.value)} required/>
        <br />
        <br />
        <button type="submit">Login</button>
       </form>
      <p>Create an Account ? <Link to='/signup' >Signup</Link> </p>
    </div>
  )
}

export default Login
