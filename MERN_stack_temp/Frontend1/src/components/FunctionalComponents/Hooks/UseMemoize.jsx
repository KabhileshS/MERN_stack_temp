import useMemoize from "./CustomHooks/MemorizingHook"

const UseMemoize = () => {

  var [custId,setCustId]=useMemoize("CustomerId","")
  var [pass,setPass]=useMemoize("Password","")
  const eventHandler=()=>{
    localStorage.removeItem("CustomerId")
    localStorage.removeItem("Password")
  }
  return (
    <div>
      <h1>This is a custom hook designed using useState</h1>
      CustomerID: <input type="text" value={custId} onChange={(e)=>setCustId(e.target.value)} /> <br />
      Password: <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} /> <br />
      <button onClick={eventHandler}>Login</button>
    </div>
  )
}

export default UseMemoize
