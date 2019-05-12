var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newBegArray = [element, ...array];
  return newBegArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element){
  var newEndArray = [...array, element];
  return newEndArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  var elementInIndex = array[index]
  return elementInIndex
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array){
  var newArray = array.slice(1)
  return newArray
}

function removeElementFromEndOfArray(array){
  var newArray = array.slice(0, array.length - 1)
  return newArray
}
