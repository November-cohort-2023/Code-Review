import './App.css'
import Navbar from './components/Navbar'

function App() {
  let myName = "Omar"

  function printName(name){
    return name
  }
 let result =  printName("Christian")

  return (
    <>
      <Navbar></Navbar>
      <h2>Hello World</h2>
      {printName("Juan")}
      <Navbar ></Navbar>
      <Navbar></Navbar>

    </>
  )
}

export default App
