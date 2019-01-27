var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, array];
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array
}
function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array 
}

function addElementToEndOfArray(array, element){
  return [...array, element]
} 


function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop() 
}

function removeElementFromEndOfArray(array){
  return array.slice(0) 
  array.length(-1) 
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}


function destructivelyRemoveElementFromEndOfArrayy(array) {
  array.slice()
  return array;
  
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(...array);
  return array
}

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, array[0]]
  return newArray
}
  