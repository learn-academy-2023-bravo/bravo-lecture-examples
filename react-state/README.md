# React State 3/27/23 Bravo

## Getting Started
- $ git pull origin main
- $ git checkout -b bravo-state
- $ yarn create react-app react-state
- $ cd react-state
- $ yarn start
- $ code .

## Plan
1. We will start with a basic functional component on App.js with a heading tag and a paragraph tag to display jokes.

- Static coding of the joke
```js
  // imports
  import React from "react"

  // functional component declaration
  const App = () => {
    return(
      <>
        <h1>Favorite Jokes from the Coop</h1>
        <p>Joke: Why did the cowboy have a weiner dog? Somebody told him to get a long little doggy.</p>
      </>
    )
  }

  // export
  export default App
```

2. Create a default joke that appears when the webpage renders.

- react state: special variable that stores data that determines how the component will render to the UI and adds behavior

- If a component has state, it is referred to as a logic component. If not, it is a display component.

- react hook: special functions that allow a component to have access to React features like state

- useState: react hook that returns to values
    - state variable
    - setter state function
  - also gives an initial value for the state variable

To add react state
- import a react hook called useState
```js
  // import hook from react
    // import {useState} from "react"

  // because we already importing from "react", place it on the same lines as the other import

  import React, {useState} from "react"
```

- array destructing values from useState
```js
  const [joke, setJoke] = useState("Why did the cowboy have a weiner dog? Somebody told him to get a long little doggy.")
```

Now we can reference the state variable with {}instead of hardcoding a value
```js
{joke}
```

3. Allow user interaction (clicking a button) to change the value of the joke
- store a list of jokes in an array called moreJokes

- Add a custom function called handleJoke to pass the setter function `setJoke` that will change the value of the state variable `joke`

```js
  const moreJokes = [
    "Why did the walrus go to a tupperware party? To find a tight Seal!",
    "What award did the dentist get for fixing everyone's teeth? A plaque!",
    "Why was Cinderella so bad at soccer? She kept running away from the ball!",
    "Why did the scarecrow get an award? He was outstanding in his field.",
    "Why couldn't the bicycle stand up by itself? It was too tired",
    "Why do ducks have feathers? To cover their butt quacks!",
    "Why did the functions stop calling each other? Because they were having constant arguments!",
    "When I was a kid, my dad got fired from his job as a road worker for theft. I refused to believe he could do such a thing, but when I got home, the signs were all there.",
    "To whoever stole my copy of Microsoft Office, I will find you. You have my Word.",
    "If you tell a dad joke and you are not a dad is it a faux pas?"
  ]
  // static way 
  // const handleJoke = () => {
  //   setJoke("Why did the walrus go to a tupperware party? To find a tight Seal!")
  // }

  // dynamic way
  const handleJoke = () => {
    const randomNum = Math.floor(Math.random() * moreJokes.length)
    setJoke(moreJokes[randomNum])
  }
```

- Add a button with an onClick attribute that will perform the function call
```js
  <button onClick={handleJoke}>
    Click for a new joke
  </button>
```

4. Refactor to have multiple components to allow a user to show their top 3 jokes
- create a folder named components in src directory
- create a file named `Joke.js` to store the logic with state
- App.js will become the display component

To see the logic from Joke.js,
- import the file to App.js
- component call within the return statement

- Create multiple component calls to reuse the logic. Each will have a separate instance that will not impact the functionality of the other component calls.


5. Styling 
  a. Add a background image using the html tag body
    - add css declaration to the App.css
    ```css
      body {
        background-image: url("./assets/coopDirector.png");
        background-color: aliceblue;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
      }
    ```
    - import App.css to App.js
    ```js
      import "./App.css"
    ```

  b. Change background color to the text using attributes
    - if using class attribute:
      - within the return statement of the applicable file, encapsulated the applicable code with a div tag
      ```js
        <div className="container"> </div>
      ```
      - in App.css
      ```css
        .container {
          border: 2px solid black;
          margin: 0 auto;
          max-width: 600px;
          left: 10%;
          background-color: rgba(250, 235, 215, 0.636);
        }
      ```

  c. Change the appearance of the button using inline styling
    - pass the style attribute on the opening JSX tag of what you want to style
    - will need two sets of curly braces. One to exit JSX and the other to deliver the style object
    - naming convention for each key in the style object will be camelCase
    - each value in the style object will be a recognizable javascript datatype. We are using strings for this example.
    - each key:value style pair will be separated by commas
    ```js
      <button 
        onClick={handleJoke} 
        style={{
          backgroundColor: "black",
          color: "white"
        }}
      >
        Click for a new joke
      </button>
    ```

## Pushing changes from a project repo/directory/folder to github
cd out to the github repo: $ cd ..
check that the correct changes were made to the project directory: $ git status
add the changes to be tracked: $ git add <file-or-folder-name>
commit the changes: $ git commit -m "descriptive message"
push changes on a branch to github: $ git push origin <branch-name>