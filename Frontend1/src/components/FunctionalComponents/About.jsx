import { useState } from "react";

function About() {
  var[str,setStr]=useState(0)

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={()=>setStr(str+1)}>Increment</button>
      <button onClick={()=>setStr(str-1)}>Decrement</button>
      <h2>The number is: {str} </h2>
      <button onClick={()=>setStr(0)}>Reset</button>
    </div>
  );
}
export default About;
