import Faculty from "./ContextAPI/Faculty.jsx"
import { createContext } from "react"

export const ResultPublish=createContext()

const CoE = (res) => {
  return (
    <ResultPublish.Provider value={{sgpa:"10 SGPA",cgpa:"10 CGPA"}} >
        <h1>Results Published</h1>
        {/* <StudentResults sgpa={res.sgpa} cgpa={res.cgpa} /> */}
        <Faculty />
    </ResultPublish.Provider>
        
  )
}

export default CoE
