// My arrays.js
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
 
 function addElementToBeginningOfArray(array, element) {
   newArray = [element, ...array]
   return newArray
 }
/* 
function destructivelyAddElementToBeginningOfArray(array, element) {
  return array
}

function addElementToEndOfArray(array, element) {
  return newArray
}
  
  
function destructivelyAddElementToEndOfArray(arrayy, element) {
  return array
}
 */