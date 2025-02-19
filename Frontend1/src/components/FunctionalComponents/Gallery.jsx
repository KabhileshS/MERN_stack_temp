import { useState } from "react"

function Gallery(){
    var[str,setStr]=useState("")
    return(
        <div>
            <h1>Gallery Page</h1>
            <h2>Initial string: {""} </h2>
            <button onClick={()=>setStr(str+"a")}>Add string</button>
            <h2>Updated String: {str} </h2>
        </div>
    )
}
export default Gallery