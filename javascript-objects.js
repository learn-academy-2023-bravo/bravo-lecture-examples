// Javascript Objects 3/22/23 Bravo

// Objects - collection of key:value pairs, stored in curly braces, intersection of data and behavior
  // key - datatype of symbol
  // value - any valid datatype of javascript

// // can create an object (data)
// const favSong = {
//   artist: "Aretha Franklin",
//   song: "Day Dreaming"
// }

// can distinguish between the key and value of an object
  // keys are artist and song
  // values are "Aretha Franklin" and "Day Dreaming"

// can access object properties with dot notation
  // nameOfTheObject.nameOfTheKey
// console.log(favSong.artist) //Output: "Aretha Franklin"
// console.log(favSong.song) //Output: "Day Dreaming"

// can create an object with a method (behavior)
  // Functions bring in behavior. A function that belongs to an object is referred to as a method.
// const favSong = {
//   artist: "Aretha Franklin",
//   song: "Day Dreaming",
//   displaySong: function() {
//     return `Sip on tea and listen to "${favSong.song}" by ${favSong.artist}.` 
//   }
// }

// Because the method belongs to the object, the object can be referenced using the keyword this.
const favSong = {
  artist: "Aretha Franklin",
  song: "Day Dreaming",
  displaySong: function() {
    return `Sip on tea and listen to "${this.song}" by ${this.artist}.` 
  }
}

// to reference the method, nameOfObject.nameOfTheKey() 
// console.log(favSong.displaySong())
  // Output: "Sip on tea and listen to "Day Dreaming" by Aretha Franklin."

// can demonstrate how to destructure an object
  // referencing multiple keys from the same object, destructure by assigning the key names to the name of the object. 
// const { song, displaySong, artist } = favSong

// can access an object's value by its destructured key
// console.log(artist) //Output: "Aretha Franklin"
// console.log(song) //Output: "Day Dreaming"
// console.log(displaySong()) 
  // Output: Sip on tea and listen to "Day Dreaming" by Aretha Franklin.

// can iterate through an array of objects using a higher-order function
const favList = [
  { artist: "Aretha Franklin", song: "Day Dreaming" },
  { artist: "The Mamas and the Papas", song: "California Dreamin'"},
  { artist: "The Police", song: "Roxanne"},
  { artist: "The Eagles", song: "Hotel California"}
]

// print out the songs that include California
  //  store a filter method in a variable named getSong
  // filter method will create a subset of the original array by iterating across each value in the array and checking for the conditions set

  const getSong = favList.filter((value) => {
    return value.song.includes("California")
  })

  console.log(getSong)
  // Output: 
  // [
  //   { artist: 'The Mamas and the Papas', song: "California Dreamin'" },
  //   { artist: 'The Eagles', song: 'Hotel California' }
  // ]