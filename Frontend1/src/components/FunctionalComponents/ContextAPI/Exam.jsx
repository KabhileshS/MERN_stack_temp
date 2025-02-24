import StudentResults from "./StudentResults"
// import Faculty from "./Faculty"
const Exam = (res) => {
  return (
    <div>
        <h1>Students are writing exams</h1>
        {/* <Faculty sgpa={res.sgpa} cgpa={res.cgpa} /> */}
        <StudentResults />
    </div>
  )
}

export default Exam
