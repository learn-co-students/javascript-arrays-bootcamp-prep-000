var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
[element, ...array]
return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array
  array.unshift(element)
  return array
}



function destructivelyAddElementToEndOfArray(array, element) {
  array
  array.push(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
   }

function accessElementInArray(array, index) {
return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array
  array.slice(1)
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
array
array.pop()
return array
}

function removeElementFromEndOfArray(array) {
  array
  return array.slice(0, -1)
   
}

