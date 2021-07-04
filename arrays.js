var chocolateBars = ["snickers", "hundred", "grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
//spread operator don't change the array
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
//unshift change the array
}


function addElementToEndOfArray(array, element) {
  return [...array, element]
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}


function accessElementInArray(array, ind) {
  return array[ind]
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


/*  We can use slice, combined with the spread operator,
to make removing from the middle of an array much easier.

var items = [1,2,3,4,5]
[...items.slice(0,2), ...items.slice(3)]

//[1,2,4,5]

*/
