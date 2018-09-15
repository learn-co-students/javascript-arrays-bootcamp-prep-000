var chocolateBars = [];

chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var regArray = [element, ...array]
  
  return regArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var destructArray = array
  destructArray.unshift(element)
  
  return destructArray
}

function addElementToEndOfArray(array, element) {
  var regEndArray = [...array, element]
  
  return regEndArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  var destructEndArray = array
  destructEndArray.push(element)
  
  return destructEndArray
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  
  return array
}

function removeElementFromBeginningOfArray(array) {
  slicedArray = array.slice(1)
  
  return slicedArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  
  return array
}

function removeElementFromEndOfArray(array) {
  var arraySlice = array
  arraySlice = array.slice(0, arraySlice.length - 1)
  
  return arraySlice
}











