import { useState } from "react"

// import mockNasa from './mockNasa'

const App = () => {
  const [nasaData, setNasaData] = useState("")

  const apiKey = process.env.REACT_APP_NASA_API_KEY

  const nasaFetch = () => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`
    )
      .then((response) => response.json())
      .then((payload) => ((payload)))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <h1>Mars Rovers Pictures</h1>
      <button onClick={nasaFetch}>Click me!</button>
      
    </>
  )
}

export default App
