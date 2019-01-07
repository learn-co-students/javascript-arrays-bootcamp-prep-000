var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"]
  
function addElementToBeginningOfArray(array, n) {
var myArray = [n, ...array]
return myArray
}

function destructivelyAddElementToBeginningOfArray(array, n) {
  array.unshift(n)
  return array
}

function addElementToEndOfArray(array, n) {
var myArray = [...array, n]
return myArray
}

function destructivelyAddElementToEndOfArray(array, n) {
  array.push(n)
  return array
}

function accessElementInArray(array, index) {
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 array.shift()
 return array
}

function removeElementFromBeginningOfArray(array) {
  var myNewArray = array.slice(1)
  return myNewArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop()
 return array
}

function removeElementFromEndOfArray(array) {
  var myNewArray = array.slice(0, array.length - 1)
  return myNewArray
}

