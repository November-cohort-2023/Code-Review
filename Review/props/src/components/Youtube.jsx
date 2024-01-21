import React from 'react'

function Youtube(props) {
  console.log(props)
  return (
    <div id='youtube-container'>
        <img id='thumbnail' src={props.thumbnail} alt="" />
        <h3 id='youtube-title'>{props.title}</h3>
        <h5 id='author'>{props.author}</h5>
    </div>
  )
}

export default Youtube

/* 

Exercise 1:

  1. download the zipped project Omar sent you

  2. unzip it and run npm i

  3. render the Youtube component in your App.jsx 3 times

  4. pass the following values for each Youtube component instance:

      i. title=Javascript basics, image = "https://i.ytimg.com/vi/W6NZfCO5SIk/sddefault.jpg" author= "Programming with Mosh"
      
      ii. title= how to install node, image = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" author = Super Programmer

      iii. title = songs to sleep to, image = "https://i.ytimg.com/vi/cJ74XdrOI60/maxresdefault.jpg" author = "MusicMan"

*/