var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"


var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, newElement) {
  var newAr = [newElement, ...array]
  return newAr
}

function destructivelyAddElementToBeginningOfArray(array, newElement) {
  array.unshift(newElement)
  return array
}

function addElementToEndOfArray(array, newElement) {
  var newAr = [...array, newElement]
  return newAr
}

function destructivelyAddElementToEndOfArray(array, newElement) {
  array.push(newElement)
  return array
}

function accessElementInArray(array, index) {
  return (array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
