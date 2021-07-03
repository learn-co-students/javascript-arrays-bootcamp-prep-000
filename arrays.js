var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = (array, element) => [element, ...array]

function destructivelyAddElementToBeginningOfArray (array, element){
   array.unshift(element)
   return array;
 }

var addElementToEndOfArray = (array, element) => [...array, element]

function destructivelyAddElementToEndOfArray (array, element) {
array.push(element)
return array
}
var accessElementInArray = (array, index) => array[index]

function destructivelyRemoveElementFromBeginningOfArray (array) {
 array.shift();
 return array;
}
var removeElementFromBeginningOfArray = (array) => array.slice(1);

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

var removeElementFromEndOfArray = array => array.slice(0, array.length - 1)
