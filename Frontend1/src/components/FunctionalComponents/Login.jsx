import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Login() {
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPass]=useState("")
  const [loading,setLoading]=useState(false)
  const [loginStatus,setLS]=useState(false)

  const userAuthenticated=()=>{
    axios.get("http://localhost:3001/isUserAuth",{
      headers:{
        "x-access-token":localStorage.getItem("token")
      }
    }).then((response)=>{
      console.log(response)
      setLS(true)
    })
  }

  const handleLogin=async(event)=>{
    event.preventDefault()
    setLoading(true)
    const req=await axios.post("http://localhost:3001/login",{ // "http://localhost:3001/login" use it for local hosting
      email:email,
      password:password
    })
    const message=req.data.message
    const isLogin=req.data.isLogin
    if(isLogin){
      alert(message)
      // console.log(req.data)
      localStorage.setItem("token",req.data.token)
      setLS(true)
      navigate('/')
    }else{
      alert(message)
    }
    setLoading(false)
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>Login Page</h1>
        <label htmlFor="email">   Email :  </label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} disabled={loading} required/>
        <br />
        <br />
        <label htmlFor="password">   Password:  </label>
        <input type="password" id="password" value={password} onChange={(e)=>setPass(e.target.value)} disabled={loading} required/>
        <br />
        <br />
        <button type="submit" disabled={loading}>{loading?"Logging in":"Login"}</button>
       </form>
      <p>Create an Account ? <Link to='/signup' >Signup</Link> </p>
      {
        loginStatus && (
          <button onClick={userAuthenticated}>Check if Authenticated</button>
      )
      }
    </div>
  )
}

export default Login
