import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const UseRef = () => {
    var[text,setText]=useState("Hi")
    var previousRender=useRef()
    useEffect(()=>{
        previousRender.current=text;
        console.log(text);
    })
  return (
    <div>
      <h1>This is UseRef example</h1>
      Enter your Text : <input type="text" value={text} onChange={(e)=> setText((e.target.value))} />
      <h2>The current render text is {text}</h2>
      <h3>The previous render text is {previousRender.current} </h3>
    </div>
  )
}

export default UseRef
