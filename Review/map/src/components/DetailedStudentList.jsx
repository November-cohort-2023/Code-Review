
function DetailedStudentList() {

    let myStudents = [
        {
            name:"Juan",
            bootcamp:"Web Dev",
            occupation:"Comedian"
        },
        {
            name:"Christian",
            bootcamp:"Web Dev",
            occupation: "Muay Thai Fighter"
        },
        {
            name:"Diogo",
            bootcamp:"Web Dev",
            occupation: "Batman"
        }
    ]
  return (
    <div>

        {myStudents.map((oneStudent)=>{
            return(
                <div>
                    <h3>{oneStudent.name}</h3>
                    <p>Bootcamp: {oneStudent.bootcamp}</p>
                    <h5>{oneStudent.occupation}</h5>
                </div>
            )
        })}
        
    </div>
  )
}

export default DetailedStudentList