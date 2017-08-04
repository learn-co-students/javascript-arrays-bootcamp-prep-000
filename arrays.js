
var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];

//

function addElementToBeginningOfArray(array, element) {
  var thingy = [...array]
  var thingyMod = [element, ...thingy]
  console.log('For: Add Element To Beginning Of Array')
  console.log(thingy + " vs.")
  console.log(thingyMod)
  console.log()
  return thingyMod

}

addElementToBeginningOfArray([1], 'foo')

//

function destructivelyAddElementToBeginningOfArray (array, element) {
  var badThingy = [...array]
  console.log('For: Destructively Add Element To Beginning Of Array')
  console.log("Before unshift: " + badThingy)
  array.unshift(element)
  badThingy = [...array]
  console.log("After unshift: " + badThingy)
  console.log()
  return badThingy

}

destructivelyAddElementToBeginningOfArray([1], "foo")

//

function addElementToEndOfArray(array, element) {
  var thingyEnd = [...array]
  var thingyModEnd = [...thingyEnd, element]
  console.log('For: Add Element To End Of Array')
  console.log(`[${thingyEnd}] vs.`)
  console.log(`[${thingyModEnd}]`)
  console.log()
  return thingyModEnd

}

addElementToEndOfArray([1], "foo")

//

function destructivelyAddElementToEndOfArray(array, element) {
  var badThingyEnd = [...array]
  console.log('For: Destructively Add Element To End Of Array')
  console.log(`Before push: [${badThingyEnd}]`)
  array.push(element)
  badThingyEnd = [...array]
  console.log(`After push: [${badThingyEnd}]`)
  console.log()
  return badThingyEnd

}

destructivelyAddElementToEndOfArray([1], "foo")

//

function accessElementInArray(array, index) {
  var thing1 = [...array]
  console.log('For: Access Element In Array')
  console.log(`Array is: [${array}]`)
  console.log(`Element at index ${index} is ${thing1[index]}`)
  console.log()
  return thing1[index]

}

const array1 = [1, 2, 3, 4]
accessElementInArray(array1, 1)

//

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var mutated = [...array]
  console.log('For: Destructively Remove Element From Beginning Of Array')
  console.log(`Before shift:  [${mutated}]`)
  array.shift(0)
  mutated = [...array]
  console.log(`After shift: [${mutated}]`)
  console.log()
  return mutated

}

const array2 = [5, 6, 7, 8]
destructivelyRemoveElementFromBeginningOfArray(array2)

//

function removeElementFromBeginningOfArray (array) {
  var sliced = [...array]
  console.log('For: Remove Element From Beginning Of Array')
  console.log(`Before: [${sliced}]`)
  console.log(`Result of 'sliced.slice(1)': [${sliced.slice(1)}]`)
  console.log()
  return sliced.slice(1)

}

const array3 = [9, 10, 11, 12]
removeElementFromBeginningOfArray(array3)

//

function destructivelyRemoveElementFromEndOfArray(array) {
  var badMutated = [...array]
  console.log('For: Destructively Remove Element From End Of Array')
  console.log(`Before pop: [${badMutated}]`)
  array.pop()
  badMutated = [...array]
  console.log(`After pop: [${badMutated}]`)
  console.log()
  return badMutated

}

const array4 = [13, 14, 15, 16]
destructivelyRemoveElementFromEndOfArray(array4)

//

function removeElementFromEndOfArray (array) {
  var goodSlice = [...array]
  console.log('For: Remove Element From End Of Array')
  console.log(`Before end slice: [${goodSlice}]`)
  console.log(`Result of 'goodSlice.slice(0, goodSlice.length - 1)': [${goodSlice.slice(0, goodSlice.length - 1)}]`)
  console.log()
  return goodSlice.slice(0, goodSlice.length - 1)

}

const array5 = [17, 18, 19, 20]
removeElementFromEndOfArray(array5)

//
























/*
var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

var myArray = [element0, element1, ..., elementN];

var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 31, 37];

var tvShows = ["game of thorones", "true detective", "the good wife", "empire"];

var weirdGreeting = [ "he", 110, "w", 0, "r", 1, "d" ];

var empty = [];

var evenNumbers = new Array();


var superheroines = [ "catwoman", "she-hulk", "mystique" ];

superheroines.push("wonder woman");


var cities = [ "New York", "San Francisco" ]

cities.unshift("Philadelphia")


var cities1 = [ "New York", "San Francisco" ]

var otherCities1 = [ "Philadelphia", ... cities1]


var cities2 = [ "New York", "San Francisco" ]

var otherCities2 = [...cities2, "Philadelphia" ]


var cities3 = [ "New York", "San Francisco" ]

cities3 = [ "Philadelphia", ...cities3]

//if we have a constant we need a new variable

const cats = [ "Milo", "Garfield"]

const moreCats = [ "Felix", ...cats]

*/
