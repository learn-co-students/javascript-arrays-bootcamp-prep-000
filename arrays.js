chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array]
  return newArray
}

// .unshift unshifts an element to the beginning of an array 
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  newArray = [...array, element]
  return newArray
}

// .push(element) pushes element to the end of the array
// mutates original array 
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

// .shift(element) removes element from the beginning of an array
// mutates original array
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

// non destructively removes an element from begginning of Array
function removeElementFromBeginningOfArray(array) {
  a = array.slice(1)
  return a
}

// Removes element from the end of an array and mutates the original
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

// Does not mutate the original array
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}





// Continue reading FROM THE MIDDLE OF AN ARRAY







