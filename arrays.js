var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(myArray, element) {
  myArray = [1]
  element = 'foo'
  return [element, ...myArray]
}

function destructivelyAddElementToBeginningOfArray(myArray, element) {
   myArray.unshift(element)
   return myArray
}

function addElementToEndOfArray(myArray, element) {
  return [...myArray, element]
}

function destructivelyAddElementToEndOfArray(myArray, element) {
  myArray.push(element)
  return myArray
}

function accessElementInArray(myArray, index) {
  index = 2
  return myArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(array) {
  array = [1, 2, 3]
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
