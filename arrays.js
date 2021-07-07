//1
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

//2
function addElementToBeginningOfArray(array, element) {
   var x = [element, ...array]
  return x
}

//3
function destructivelyAddElementToBeginningOfArray(array, element) {
   var x = array
   array.unshift(element)
  return x
}

//4
function addElementToEndOfArray(array, element) {
   var x = [...array, element]
  return x
}

//5
function destructivelyAddElementToEndOfArray(array, element) {
   var x = array
   array.push(element)
  return x
}

//6
function accessElementInArray(array, index) {
  return array[index]
}

//7
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

//8
function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

//9
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

//10
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}
