var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

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

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

function accessElementInArray(array, index) {
  return array[index]
}

// 1) arrays chocolateBars is an array containing "snickers", "hundred grand", "kitkat", and "skittles":
  
// 2) arrays addElementToBeginningOfArray(array, element) adds an element to thebeginning of an array:
     
// 3) arrays addElementToBeginningOfArray(array, element) does not alter the original array:
    
// 4) arrays destructivelyAddElementToBeginningOfArray(array, element) adds an element to the beginning of an array:

// 5) arrays destructivelyAddElementToBeginningOfArray(array, element) alters the original array:

// 6) arrays addElementToEndOfArray(array, element) adds an element to the end of an array:

// 7) arrays addElementToEndOfArray(array, element) does not alter the original array:

// 8) arrays destructivelyAddElementToEndOfArray(array, element) adds an elementto the end of an array:

// 9) arrays destructivelyAddElementToEndOfArray(array, element) alters the original array:

// 10) arrays accessElementInArray(array, index) accesses the element in array at the given index:
     
// 11) arrays destructivelyRemoveElementFromBeginningOfArray(array) returns the array with the first element removed:

// 12) arrays destructivelyRemoveElementFromBeginningOfArray(array) alters the original array:

// 13) arrays removeElementFromBeginningOfArray(array) removes the first elementfrom the array:

// 14) arrays removeElementFromBeginningOfArray(array) does not alter the original array:

// 15) arrays destructivelyRemoveElementFromEndOfArray(array) returns the array with the last element removed:

// 16) arrays destructivelyRemoveElementFromEndOfArray(array) alters the original array:

// 17) arrays removeElementFromEndOfArray(array) removes the last element from the array:

// 18) arrays removeElementFromEndOfArray(array) does not alter the original array:























