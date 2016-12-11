var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(array, additionToArray) {
  return array = [additionToArray, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, additionToArray) {
  array.unshift(additionToArray)
  return array // need to fix
 }
 function addElementToEndOfArray(array, additionToArray) {
   return array = [...array, additionToArray]
 }
 function destructivelyAddElementToEndOfArray(array, additionToArray) {
  array.push(additionToArray)
   return array // need to fix
  }
  function accessElementInArray(array, index) {
    return array[index]
  }
  function destructivelyRemoveElementFromBeginningOfArray(array) {
    return array.shift() 
  }
  function removeElementFromBeginningOfArray(array) {
    return array.slice(1)
  }
  function destructivelyRemoveElementFromEndOfArray(array) {
    return array.pop()
  }
  function removeElementFromEndOfArray(array) {
    return array.slice(0, array.length -1)
  }