var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray() {
  array = [1]
  
  newArray = ["foo", ...array]
  
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array) {
  
  array.unshift("foo")

  return array
}

detructivelyAddElementToBeginningOfArray(array)

function addElementToEndOfArray() {
  array = [1]
  
  newArray = [...array, "foo"]
  
  return newArray
}

function destructivelyAddElementToEndOfArray(array) {
  
  array.push("foo")
  
  return array
 
}

destructivelyAddElementToEndOfArray(array)

function accessElementInArray() {
  
  array = [1, 2, 3]

  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  
  array.shift()
  
  return array
}

destructivelyRemoveElementFromBeginningOfArray(array)

function removeElementFromBeginningOfArray() {
  array = [1, 2, 3]
  
  array.slice(1)
  
  array = [2, 3]
  
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  
  array.pop() // returns the removed element, in this case 3
  
  return array
}

destructivelyRemoveElementFromEndOfArray(array)

function removeElementFromEndOfArray() {
  array = [1, 2, 3] 
  
  array.slice(0, array.length - 1)
  
  array = [1, 2]
  
  return array
}

