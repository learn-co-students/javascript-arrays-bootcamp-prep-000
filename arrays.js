var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray() {
  array = [1]
  
  newArray = ["foo", ...array]
  
  return newArray
}

function destructivelyAddElementToBeginningOfArray() {
  array = [1]
  
  array.unshift("foo")
  
  return array
}

function addElementToEndOfArray() {
  array = [1]
  
  newArray = [...array, "foo"]
  
  return newArray
}

function destructivelyAddElementToEndOfArray() {
  const array = [1]
  
 var element = "foo"
  
  array.push(element)
  
  return array
 
}

function accessElementInArray() {
  
  array = [1, 2, 3]
  
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray() {
  array = [1, 2, 3]
  
  array.shift()
  
  array = [2, 3]
  
  return array
}

function removeElementFromBeginningOfArray() {
  array = [1, 2, 3]
  
  array.slice(1)
  
  return array
}

function destructivelyRemoveElementFromEndOfArray() {
  array = [1, 2, 3]
  
  array.pop() // returns the removed element, in this case 3
  
  array = [1, 2]
  
  return array
}

function removeElementFromEndOfArray() {
  array = [1, 2, 3] 
  
  array.slice(0, array.length - 1)
  
  array = [1, 2]
  
  return array
  
}

