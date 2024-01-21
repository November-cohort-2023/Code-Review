import './App.css'
import {useState} from 'react'
import StudentList from './components/StudentList'
import DetailedStudentList from './components/DetailedStudentList'

function App() {
/* let [count,setCount] = useState(0)
 *//* 
console.log(count)


  let myTeacher = {
    name: "Felipe",
    homeCountry: "Brazil",
    residence: "France",
    job: "Teacher"
  }

  // console.log(myTeacher.name)
  // console.log(myTeacher.residence)

  let {name, homeCountry, job} = myTeacher

  console.log(myTeacher.name)
  console.log(name)
  console.log(myTeacher)

  let myStudents = ["Christian", "Eleanor","Juan"]

  let [firstStudent,,secondStudent] = myStudents

 */
  return (
    <>
    <DetailedStudentList></DetailedStudentList>
    </>
  )
}

export default App
