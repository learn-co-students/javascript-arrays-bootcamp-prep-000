var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray (array, entry) {
  //accesses an array, adds an element to the beginning, and returns the new, different array without altering the first
  
  array = [entry, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray (array, entry) {
  //accesses an array, adds an element to the beginning, and reurns the new altered array
  
 array.unshift(entry)
 return array
 }

function addElementToEndOfArray (array, entry) {
//accesses an array, adds an element to the end, and returns the new, different array without altering the first  
  array = [...array, entry]
  return array
}

function destructivelyAddElementToEndOfArray (array, entry) {
  //accesses an array, adds an element to the end, and returns the new altered array
  array.push(entry)
  return array
}

function accessElementInArray (array, index) {
  //acces an array with an index and return that value
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  //takes in array, removes first element and returns the mutated form
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  //access an array, remove the first element, and return the new array without altering the first
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  //access an array, remeove the last element, return the entire mutated original array
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  //access an array, remove the last element, return the new array without mutating the original
  array = array.slice(0, array.length - 1)
  return array
}
