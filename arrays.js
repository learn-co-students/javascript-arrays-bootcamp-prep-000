var chocolateBars = ["chocolateBars", "snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array]
  
  return newArray
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  
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
  slicedarray = array.slice(1)
  
  return slicedarray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)

}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element)
   return array
}