// GitHub Process
// cd into the javascript-foundations-challenges repository
// Create a new branch: jest-initials1-initials2 (ex. jest-aw-sp)
// Create a new directory mkdir jest-student1-student2 (ex. jest-austin-sarah) to store all the code snippets introduced from adding jest package
// cd into the directory you just created
// touch a file called: jest.test.js
// Add the dependencies by running $ yarn add jest in the terminal
// Open the Jest directory in a text editor
// Code!

// YARN - Yet Another Resource Negotiator - package manager that adds all the code snippets and dependencies for your code

  // - replaced (node package manager) npm

// JEST - testing framework for javascript programming language

// Test driven development - make sure the code actually works
  // Input: What is the value your are passing to your method ir function.
  // Actual result. What value did you receive from running your method or function.
  // Expected output. What was supposed to happen from receiving a particular input?

  // RED-GREEN-REFACTOR

    // red
      // Write the test
      // See the test fail

    // green  
      // Write the code
      // See the test pass

    // refector
      // Refactor, if necessary

// Process
    // red
      // Write the test
      // describe takes in two arguments: the name of the function as a string and a callback function
      describe("tea", () => {
        // nested in the call back function, it takes in two arguments: the description of the function and a call back function
        it("returns a string that says Bravo2023, take a sip of tea and don't forget to point the pink up", () => {
          // nested in the call back function, expect statement will contain the function call with a jest matcher appended to the end
          expect(tea()).toEqual("Bravo2023, take a sip of tea, and don't forget to point the pink up!")
        })
      })
      // See the test fail
      // $ yarn jest
      // Good failure
      
      // Output:
      // FAIL  ./jest.test.js
      // tea
      //   ✕ returns a string that says Bravo2023, take a sip of tea and don't forget to point the pink up
    
      // ● tea › returns a string that says Bravo2023, take a sip of tea and don't forget to point the pink up
    
      //   ReferenceError: tea is not defined
   

    // green  
      // Write the code
      // PSEUDOCODE
        // https://github.com/learn-academy-2023-bravo/Syllabus/blob/main/javascript/functions.md
        // Function Signature
          // input: none
          // output: a string that says Bravo2023, take a sip of tea and don't forget to point the pink up
          // "Bravo2023, take a sip of tea, and don't forget to point the pink up!"

          // Process
          // create a function called tea that returns a string that says Bravo2023, take a sip of tea and don't forget to point the pink up
          

      // FUNCTION
      // const tea = () => {
      //   return "Bravo, take a sip of tea, and don't forget to point the pink up!"
      // }

      // See the test pass

      // If test fails, the suite will give an output of what is failing

      // Output:
        // FAIL  ./jest.test.js
        // tea
        //   ✕ returns a string that says Bravo2023, take a sip of tea and don't forget to point the pink up (2 ms)
      
        // ● tea › returns a string that says Bravo2023, take a sip of tea and don't forget to point the pink up
      
        //   expect(received).toEqual(expected) // deep equality
      
        //   Expected: "Bravo2023, take a sip of tea, and don't forget to point the pink up!"
        //   Received: "Bravo, take a sip of tea, and don't forget to point the pink up!"

        // Make corrections

        const tea = () => {
          return "Bravo2023, take a sip of tea, and don't forget to point the pink up!"
        }

        // Passing output
        // PASS  ./jest.test.js
        // tea
        //   ✓ returns a string that says Bravo2023, take a sip of tea and don't forget to point the pink up (1 ms)
      
    // refactor
      // Refactor, if necessary

// Write a function that takes in two arrays and places them in alphabetical order.

// TEST
// red
// Write the test
describe("alphabetSoup", () => {
  it("takes in two arrays and places them in alphabetical order", () => {
        // place test variables inside the it callback function
        let soups = ["new england clam chowder", "lobster bisque", "tum yum", "frosted flakes", "vegetable soup"]
        let moreSoups = ["ramen", "pho", "menudo"] 
        expect(alphabetSoup(soups, moreSoups)).toEqual(["frosted flakes", "lobster bisque", "menudo", "new england clam chowder", "pho", "ramen", "tum yum", "vegetable soup"])
      })
    })
    // See the test fail
    // $ yarn jest

    // Output: good failure failing at the function call
      // FAIL  ./jest.test.js
      // tea
      //   ✓ returns a string that says Bravo2023, take a sip of tea and don't forget to point the pink up (1 ms)
      // alphabetSoup
      //   ✕ takes in two arrays and places them in alphabetical order
    
      // ● alphabetSoup › takes in two arrays and places them in alphabetical order
    
      //   ReferenceError: alphabetSoup is not defined

  // green  
    // Write the code

    // PSEUDOCODE
    // input: two arrays
    // output: an alphabetized array

    // if given ["new england clam chowder", "lobster bisque", "tum yum", "frosted flakes", "vegetable soup"] and ["ramen", "pho", "menudo"], output will be ["frosted flakes", "lobster bisque", "menudo", "new england clam chowder", "pho", "ramen", "tum yum", "vegetable soup"]

    // PROCESS
    // Create a function named alphabetSoup that takes in two arrays and places them in alphabetical order
    // use concat to combine the two arrays into one array, will need to store in a variable
    // use sort to alphabetize the values inside the array

    // FUNCTION
    // const alphabetSoup = (array1, array2) => {
    //   let soupArray = array1.concat(array2)
    //   return soupArray.sort()
    // }

    // See the test pass
    // Successful output
    //  PASS  ./jest.test.js
      //   tea
      //   ✓ returns a string that says Bravo2023, take a sip of tea and don't forget to point the pink up (1 ms)
      // alphabetSoup
      //   ✓ takes in two arrays and places them in alphabetical order

  // refactor
    // Refactor with chaining the methods
    const alphabetSoup = (array1, array2) => {
      return array1.concat(array2).sort()
    }

    // Check that it is still passing
    // successful output:
        // PASS  ./jest.test.js
        // tea
        //   ✓ returns a string that says Bravo2023, take a sip of tea and don't forget to point the pink up (1 ms)
        // alphabetSoup
        //   ✓ takes in two arrays and places them in alphabetical order
      
      // Pushing changes from a project repo/directory/folder to github
        // cd out to the github repo: $ cd ..
        // check that the correct changes were made to the project directory: $ git status
        // add the changes to be tracked: $ git add <file-or-folder-name>
        // commit the changes: $ git commit -m "descriptive message"
        // push changes on a branch to github: $ git push origin <branch-name>
    
      // Merging changes locally after merging to main on github
        // ensure local main branch is up to date with remote main branch: 
          // $ git checkout main
          // $ git pull origin main
        // delete stale branch: $ git branch -d <branch-name>