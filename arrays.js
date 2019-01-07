
// define variable chocolateBars--its value shoule be an array of strings

var chocolate = ["snickers", "hundred grand", "kitkat", "skittles"]

// return a new array and not modify the original
function addElementToBeginningOfArray(array, element) {
   return [element, ...array]
 }
 
// alter the original array that's passed in
 function destructivelyAddElementToBeginningOfArray(array, element) {
   return array = [element, ...array]
 }