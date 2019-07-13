var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray = array;
  newArray = [element, ...newArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var secondArray = array;
  secondArray.unshift(element)
  return secondArray
}

function addElementToEndOfArray(array, element) {
  var thirdArray = array;
  thirdArray = [...thirdArray, element]
  return thirdArray
}

function  destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  var sixthArray = array;
  sixthArray.shift(element) 
  return sixthArray
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
