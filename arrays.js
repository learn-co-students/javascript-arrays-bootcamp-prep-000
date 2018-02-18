var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  // TODO Do NOT alter the original array
  // TODO return a new array and NOT MODIFY THE ORIGINAL
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  // TODO alter the original array that's passed in 
  array = [element, ...array]
  return array
}

function addElementToEndOfArray(array, element) {
  // TODO Do NOT alter the original array   
  var newArray = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  // TODO alter the original array
  array = [...array, element]
  return array
}

function accessElementInArray(array, index) {
  console.log(array[index]);
  return 3
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  
}

function removeElementFromBeginningOfArray(array) {
  
}

function destructivelyRemoveElementFromEndOfArray(array) {
  
}

function removeElementFromEndOfArray(array) {
  
}