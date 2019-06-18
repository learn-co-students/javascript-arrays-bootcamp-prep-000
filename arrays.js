var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array, element) {
  newArray = [element,...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element)
   return array
}

function addElementToEndOfArray(array,n) {
  newArray = [...array, n]
  return newArray
  
}

function destructivelyAddElementToEndOfArray(array,n) {
  array.push(n)
  return array
}

function accessElementInArray(array,n) {
  return array[n]
}

function destructivelyRemoveElementFromBeginningOfArray (array,n) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray (array) {
  newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  newArray= array.slice(0, array.length-1)
  return newArray
}