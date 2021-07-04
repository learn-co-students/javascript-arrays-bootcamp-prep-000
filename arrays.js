var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, element) {
  return [`${element}`, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr,element) {
  arr.unshift(element)
  return arr
}
function addElementToEndOfArray(arr,element) {
  return [...arr, element]
}
function destructivelyAddElementToEndOfArray(arr,element) {
  arr.push(element)
  return arr
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift()  
return array
}
function removeElementFromBeginningOfArray(array) {
    array = array.slice(1)
   return array
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
function removeElementFromEndOfArray(array) {
  array = array.slice(0,array.length - 1)
  return array
}