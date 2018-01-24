
var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(array, element) {
  
  return [element, ...array]
  
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  
   array.unshift(element)
   
  return array
}

function addElementToEndOfArray(array, element) {
  
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
   
  return array
  
}

function accessElementInArray (array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.splice(0, 1)
  return array
}

function removeElementFromBeginningOfArray(array) {
  var newArray = []
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i])
  }
  return newArray
  
}

function removeElementFromEndOfArray(array) {
  var newArray = []
  for (var i = 0; i < (array.length - 1); i++) {
    newArray.push(array[i])
  }
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  
  array.pop()
  return array
  
}


