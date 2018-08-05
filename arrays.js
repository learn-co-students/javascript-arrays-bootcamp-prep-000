// My arrays.js
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
 
 function addElementToBeginningOfArray(array, element) {
   const newArray = [element, ...array]
   return newArray
 }

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}
/*
function addElementToEndOfArray(array, element) {

  return newArray
}
  
  
function destructivelyAddElementToEndOfArray(arrayy, element) {
  return array
}
 */
console.log("Starting my JAVASCRIPT ARRAYS Lab.") // DOES NOT DISPLAY
addElementToBeginningOfArray(chocolateBars, 'Dark Chocolate')
console.log(chocolateBars)
destructivelyAddElementToBeginningOfArray(chocolateBars, "Dark Chocolate")
console.log(chocolateBars)
console.log('Finished my JAVASCRIPT ARRAYS Lab.') // DOES NOT DISPLAY
// eND OF MY ARRAYS.JS