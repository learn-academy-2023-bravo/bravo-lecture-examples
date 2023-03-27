// imports
import React from "react"
import Joke from "./components/Joke"
import "./App.css"

// functional component declaration
const App = () => {

  return(
    <div className="container">
      <h1>Favorite Jokes from the Coop</h1>
      <h3>Favorite Joke 1</h3>
      <Joke />
      <h3>Favorite Joke 2</h3>
      <Joke />
      <h3>Favorite Joke </h3>
      <Joke />     
    </div>
  )
}

// export
export default App