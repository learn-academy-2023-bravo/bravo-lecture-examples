## Getting started with react app
- cd into the react-challenges repository
- Create a new branch: intro-initials1-initials2 (ex. intro-aw-sp)
- Create a new React application with no spaces using the kebob-case naming convention: yarn create react-app intro-student1-student2 (ex. yarn create react-app intro-austin-sarah)
- cd into the project
- Open the project in a text editor

## Two additional directories
- public has the index.html file
- src has the App.js

## Render the react application
- $ yarn start
- terminal will act as a server: allows the local computer to process and render the application in the browser

## Open a new terminal
- Command + T

## basic functional component
```js
// imports the dependencies needed for the component
import React from "react"

// functional component declaration
const App = () => {
  return(
    <>
      <h1>Bravo Soup List</h1>
      <h2>Prepare your spoons and get your napkins ready</h2>
    </>
  )
}

// export so the functional component can be seen
export default App
```

## additional components
- Create a components folder under the src directory
- create a file to store the functional component: best practice is to have the same names for both
- create functional component
- import the component onto App.js with its relative path
- perform component call

