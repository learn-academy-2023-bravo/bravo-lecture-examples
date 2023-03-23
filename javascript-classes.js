// JAVASCRIPT CLASSES LECTURE  NOTES 3/23/2023

let car = {
  make: "Toyota",
  model: "Tacoma",
  year: 2004,
  color: "pink"
}

//  class - keyword to declare a js class
//  class name uses PascalCase - first letter is capitalized and all subsequent words capitalized

// recipeBook  RecipeBook

// class + NameOfClass {

// }

// class Car {
//   constructor() {
//     this.make = "Toyota",
//     this.model = "Tacoma",
//     this.year = 2004,
//     this.color = "pink"
//   }
// }

// instantiation - creating an instance of a class(object)
// new - reserved keyword allows to make a new object from the class
// syntax:   let/const variable = new Class()

// let pinkCar = new Car()
// console.log(pinkCar)


// class Car {
//   constructor(makeString, modelString, yearNumber, colorString) {
//     this.make = makeString,
//     this.model = modelString,
//     this.year = yearNumber,
//     this.color = colorString
//   }
// }

// let myDreamCar = new Car(2023,"Silver","Porsche", "Boxter",  )
// Car { make: 'Porsche', model: 'Boxter', year: 2023, color: 'Silver' }

// let myDreamCar = new Car(2023,"Silver","Porsche", "Boxter",  )
// Car { make: 2023, model: 'Silver', year: 'Porsche', color: 'Boxter' }
// console.log(myDreamCar)

// console.log(yourDreamCar)
// Car { make: 'Audi', model: 'S4', year: 2023, color: 'Navy' }



class Car {
  constructor(makeString, modelString, yearNumber, colorString) {
    this.make = makeString,
    this.model = modelString,
    this.year = yearNumber,
    this.color = colorString,
    this.isOperational = true
  }
  carBoasting() {
    return `My ${this.make} ${this.model} is super cool!`
  }
  brokeDown() {
    this.isOperational = false
  }

}

let yourDreamCar = new Car("Audi", "S4", 2023, "Navy")

console.log(yourDreamCar.carBoasting())
// My Audi S4 is super cool!
console.log(yourDreamCar)

console.log(yourDreamCar.brokeDown())
console.log(yourDreamCar)
