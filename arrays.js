var chocolateBars = ["Snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
   var newArray = [element, array[0]]
   return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray (array, index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop()
 return array
}

function removeElementFromEndOfArray(array) {
 var array = array.slice(0, array.length - 1)
 return array
}
