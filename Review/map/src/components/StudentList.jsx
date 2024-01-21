
function StudentList() {

    let mystudents = ["Christian","Eleanor","Juan"]
    /* what does the map() method do?
        The map method iterates through my array 1 element at a time and returns a new array
    */

        // console.log(mystudents)

        const newStudents = mystudents.map((oneElement)=>{
            return oneElement + " is in Web Dev Bootcamp"
        })
        // console.log(newStudents)
        // console.log(mystudents)
  return (
    <div>
        {mystudents.map((oneStudent)=>{
            return(
                <div>
                    {oneStudent}
                    <h2>Web Dev Bootcamp</h2>
                </div>
            )
        })}
    </div>
  )
}

export default StudentList