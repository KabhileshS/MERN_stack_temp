import { useEffect, useState } from "react";

const UseEffect = () => {
    var[text,setText]=useState("hi");
    var[text2,setText2]=useState("hello");

    useEffect(()=>{
      console.log(text)
      console.log(text2)
    },[])
  return (
    <section>
      <h2>This is USeEffect Example</h2>
      Type your text : <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <h3>The Text is {text} </h3>

      Type your text : <input type="text" value={text2} onChange={(e)=>setText2(e.target.value)}/>
      <h3>The Text is {text2} </h3>
    </section>
  )
}

export default UseEffect
