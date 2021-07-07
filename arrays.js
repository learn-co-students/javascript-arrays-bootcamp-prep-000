var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

// arrays

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
    
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
 
var cities = ["New York", "San Francisco"]

cities = ["Philadelphia", ...cities]
cities = [...cities, "Philadelphia"]

const cats = ["Milo", "Garfield"]
const moreCats = ["Felix", ...cats]


function addElementToBeginningOfArray(array1, elementAdded) {
  var newestArray = [elementAdded, ...array1]
  return newestArray
}
var newArray = ["Mallory", "Dobby"]
addElementToBeginningOfArray(newArray, "Mia")


function destructivelyAddElementToBeginningOfArray(array, beginningElement) {
  array.unshift(beginningElement)
  return array
}
var myArray2 = ["running", "reading"]
destructivelyAddElementToBeginningOfArray(myArray2, "hopscotch")


function addElementToEndOfArray(array, elementAdded) {
  var endOfArray = [...array, elementAdded]
  return endOfArray
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}


function accessElementInArray(array, index) {
  var accessed = array[index]
  return accessed
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}


function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}


function removeElementFromEndOfArray(array) {
  var arraySlice = array.slice(0, array.length - 1)
  return arraySlice
}
removeElementFromEndOfArray(["chocolate", "vanilla", "rasberry"])