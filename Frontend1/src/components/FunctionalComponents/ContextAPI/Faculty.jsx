import Exam from "./Exam"
const Faculty = (res) => {
  return (
    <div>
      <Exam />
      <h1>Faculty Correcting Papers</h1>
      {/* <Exam sgpa="10 SGPA" cgpa="10 CGPA" /> */}
      {/* <CoE sgpa={res.sgpa} cgpa={res.cgpa} /> */}
    </div>
  )
}

export default Faculty
