var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [1]
function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}


function destructivelyAddElementToBeginningOfArray(array, element){
   array.unshift(element);
   return array
}

function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element)
   return array
}
function addElementToEndOfArray(array, element){
  return [...array, element]
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}

function accessElementInArray(array, index) {
  return array[index]
}
