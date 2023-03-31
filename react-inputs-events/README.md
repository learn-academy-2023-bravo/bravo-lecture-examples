## React Inputs and Events 3/31/23 Bravo

## DOM Events
- user interactions tracked by the Document Object Model (DOM)
- examples: typing on a form, clicking a button, selecting an element 

## Updating state with the user input

1. Create state for the input
- create a basic functional component in App.js
```js
  // import
  import React from "react"

  // functional component declaration
  const App = () => {
    // return to the UI
    return(
      <></>
    )
  }

  // export
  export default App
```
- create a state that will track the name of the user as a string
```js
// import
import React, {useState} from "react"
// react state data
  const [user, setUser] = useState("Bravo 2023")
// return statement
  return(
    <>
      <h1>{user}</h1>
    </>
  )
```

2. Provide a space to capture what the user is typing
- use the input tag: specifies an input field where the user can enter data
- attributes of input:
    - type: specifies what type of input you will use
    - placeholder: hint of the expected data for the input field
    - value: specifies what state variable will store this value
    - onChange: listens for any changes to the input field and sends DOM events to functions
- add input tag to return statement
```js
  <input 
    type="text" 
    placeholder="What is your name?"
    value={user}
  />
```
- create a custom function that will accept  the DOM event and print it out to the console
```js
const handleChange = (e) => {
  // console.log(e)
  // console.log(e.target)
  // console.log(e.target.value)
  setUser(e.target.value)
}
const handleChange = (e) => {
  console.log(e)
}
``` 

3. Display user input
- create custom function

