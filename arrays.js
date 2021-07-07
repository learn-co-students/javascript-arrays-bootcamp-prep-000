var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
   
} 

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array

}

function accessElementInArray(array, element) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array
}

function removeElementFromBeginningOfArray(array, element) {
  return array.slice(1);
} 

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop();
  return array
}

function removeElementFromEndOfArray(array, element) {
  return array.slice(0, array.length - 1);
}

