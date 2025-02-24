import Exam from "./Exam"
import { useContext } from "react"
import { ResultPublish } from "../CoE"

const StudentResults = (res) => {
    const result=useContext(ResultPublish)
  return (
    <div>
      {/* <Exam sgpa={res.sgpa} cgpa={res.cgpa} /> */}
      <h1>Results</h1>
      <h2>SGPA: {result.sgpa} </h2>
      <h2>CGPA: {result.cgpa} </h2>
    </div>
  )
}

export default StudentResults
