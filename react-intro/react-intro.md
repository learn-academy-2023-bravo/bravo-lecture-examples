## React Intro 3/24/23 Bravo

### Learning Objectives
- can define React
  - React: Javascript library for building user interfaces (UI)

  - Javascript library: a collection of code snippets and dependencies to perform tasks on a JS application

  - UI: how the user interacts with an application

  - React is popular because of the following features:
    - Component based 
    - Reusable 
    - Scalable
    - User interfaces

can define DOM
  - Document Object Model (DOM): visual representation of the html elements
  - organizes the html elements into a tree-like structure called the node tree 

can reproduce the basic structure of a function-based React component
 - Copy code block provided in the syllabus

can describe a component
 ```js
 const App = () => {
    return <h1>Hello World!</h1>
  }
 ```
 - a function that returns JSX to the UI
 - PascalCase naming convention


can define JSX
- Javascript syntax extension which allows html syntax and have the functionality of JS
- hybrid between html and JS

can demonstrate the process of setting up a basic function-based React component
- to add additional elements in the return:
  - () and <></> around the JSX elements
  - React fragments: <> </>, empty angle brackets
```js
return( 
  <>
    <h1>Bravo Jams</h1>
    <h3>Enjoy these sweet beats </h3>
  </>
)
```

can demonstrate the creation of multiple components
- Song component
"Angel" by Lalah Hathway
"I Will Always Love You" by Whitney Houston
"Killing Me Softly" by the Fugees
"All Along the Watchtower" by Jimi Hendrix

- Footer component
"Don't forget your tea"

```js
const Song = () => {
  return(
    <>
      <h1>Bravo Jams</h1>
      <h3>Enjoy these sweet beats </h3>
      <ul>
        <li> "Angel" by Lalah Hathway </li>
        <li> "I Will Always Love You" by Whitney Houston </li>
        <li> "Killing Me Softly" by the Fugees </li>
        <li> "All Along the Watchtower" by Jimi Hendrix </li>
      </ul>
    </>
  )
}

const Footer = () => {
  return <footer> Don't forget your tea </footer>
}
```

can display multiple components inside a container component
```js
  const App = () => {
    return( 
      <>
        <Song />
        <Footer />
      </>
    )
  }
```

***As promised, here are explanations of the configuration of the react application on the html file***
```html
<!-- html basic structure of a react application -->
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <!-- two React scripts from an external website called unpkg.com: 
    react is the core React library.
    react-dom provides DOM-specific methods that enable you to use React with the DOM. -->
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>

    <!-- Browsers don’t understand JSX out of the box, so you’ll need a JavaScript compiler, such as a Babel, to transform your JSX code into regular JavaScript. -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Intro to React</title>
  </head>
  <body>
    <!-- Give the div a unique id so that you can target it later. -->
    <div id="react-container"></div>
    <!-- Inform Babel what code to transform by changing the script type to type=text/jsx. -->
    <script type="text/babel">
      // react component 
      const App = () => {
        // return statement
        return(
          // react fragments with component calls nested inside it
          <>
            <Header />
            <Footer />
          </>
        )
      }
      // additional react components
      const Header = () => {
        return(
          <>
            <h1>Bravo Jams</h1>
            <h3>Enjoy these sweet beats </h3>
          </>
        ) 
      }
      const Footer = () => {
        return <footer> Don't forget your tea </footer>
      }
      // The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. 
      const domContainer = document.querySelector("#react-container")
      // createRoot lets you create a root to display React components inside a browser DOM node.
      const root = ReactDOM.createRoot(domContainer)
      // React will create a root for the domNode, and take over managing the DOM inside it. After you’ve created a root, you need to call root.render to display a React component inside of it:
      root.render(<App />)
    </script>
  </body>
</html>
```