var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToBeginningOfArray(array, element) {
  var begArray = [element, ...array]
  return begArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}


function addElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function addElementToEndOfArray(array, element) {
  var endArray = [...array, element];
  return endArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index){
return array[2]
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
 var sliceArray = array.slice(1)
  return sliceArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var newSliceArr = array.slice(0, array.length -1)
  return newSliceArr
}
