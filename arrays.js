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

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [`element`, ...array]
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