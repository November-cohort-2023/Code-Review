import './App.css'
import TabItem from './components/TabItem'
import Youtube from './components/Youtube'

function App() {

  return (
    <div id='thumbnail-container'>
{/*       <TabItem studentName = "Juan" tabIcon = 'picture' tabName="News Feed"></TabItem>
      <TabItem studentName = "Juan" tabIcon = 'picture' tabName="Messanger"></TabItem>
      <TabItem studentName = "Juan" tabIcon = 'picture' tabName="Watch"></TabItem>
      <TabItem studentName = "Juan" tabIcon = 'picture' tabName="Marketplace"></TabItem>
 */}  
      <Youtube title="How to Install Node" author = "Super Programmer" thumbnail ='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'></Youtube>
      <Youtube></Youtube>
      <Youtube></Youtube>
    </div>
  )
}

export default App



/* 

Exercise 1:


  1. render the Youtube component in your App.jsx 3 times

  2. pass the following values for each Youtube component instance:

      i. title=Javascript basics, image = "https://i.ytimg.com/vi/W6NZfCO5SIk/sddefault.jpg" author= "Programming with Mosh"
      
      ii. title= how to install node, image = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" author = Super Programmer

      iii. title = songs to sleep to, image = "https://i.ytimg.com/vi/cJ74XdrOI60/maxresdefault.jpg" author = "MusicMan"

*/