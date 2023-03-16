// JavaScript Arrays 3/16/2023

// data types - predefined classification of information
// every data type has properties

// 1
// "1"

// behavior

5 + 8
"hello".toUpperCase()

// true.toUpperCase() doesn't work

// "true"

// "hello" + "!" concatenation

// console.log("hello" + "!")
// --> hello!

// console.log("hello".concat("!"))
// --> hello!

// data types: Boolean, number, symbols, null, undefined, string

// array - data types that holds sets of information, non-primitive

// [] - defined by square brackets

// [5]
// [true]
// ["hello"]

// [4, 5, 6, "hello", true, "yo!"]
// console.log([].length)
// --> 0

// console.log([3].length)
// --> 1

// console.log([4, 5, 6, "hello", true, "yo!"].length)
// --> 6

// [4, 5, 6, "hello", true, "yo!"] // array
// [4, 5, 6, "hello", true, "yo!"].length // number

// [4, 5, 6, "hello", true, "yo!"]
// let myArray = [4, 5, 6, "hello", true, "yo!"]
// console.log(myArray)

// console.log([4, 5, 6, "hello", true, "yo!"])
// console.log("length:", myArray.length)

// console.log(myArray[0])
// --> 4
// console.log(myArray[5])
// --> yo!
// console.log(myArray[myArray.length - 1])
// --> yo!
// console.log(myArray[100])
// --> undefined

// myArray[3] = "Hello Bravo class!"
// console.log(myArray)
// --> [ 4, 5, 6, 'Hello Bravo class!', true, 'yo!' ]

// Built in methods
// mutator - permanently modify the thing it is called on
// accessor - will not

// let myArray = [4, 5, 6, "hello", true, "yo!"]

// takes an argument and adds the argument to the end of the array
// console.log("push:", myArray.push("hello world!"))
// --> push: 7

// console.log(myArray)
// --> [ 4, 5, 6, 'hello', true, 'yo!', 'hello world!' ]

// removes the last item in the array
// myArray.pop()
// console.log(myArray)

// myArray.reverse()
// console.log(myArray)
// --> [ 'yo!', true, 'hello', 6, 5, 4 ]

// console.log(myArray.slice(2, 4))
// --> [ 'hello', 6 ]
// console.log(myArray)
// let subsetArray = myArray.slice(2, 4)
// console.log("slice:", subsetArray)
// --> slice: [ 'hello', 6 ]

let myArray = [4, 5, 6, "hello", true, "yo!"]

// console.log(myArray.join())
//--> 4,5,6,hello,true,yo!

// console.log(myArray.join(""))
// --> 456hellotrueyo!

// console.log(myArray.join("*"))
// --> 4*5*6*hello*true*yo!

let bravo = "hello bravo class!"
// console.log(bravo.reverse())
// --> bravo.reverse is not a function << you are calling the function on the wrong data type

// console.log(bravo.split())
// --> [ 'hello bravo class!' ]

// console.log(bravo.split().reverse())

// console.log(bravo.split(""))
// --> ['h', 'e', 'l', 'l', 'o',' ', 'b', 'r', 'a', 'v','o', ' ', 'c', 'l', 'a','s', 's', '!']
console.log(bravo.split("").reverse())
// --> [ '!', 's', 's', 'a', 'l', 'c', ' ', 'o', 'v', 'a', 'r', 'b', ' ', 'o', 'l', 'l', 'e', 'h']

console.log(bravo.split("").reverse().join(""))
// --> !ssalc ovarb olleh
