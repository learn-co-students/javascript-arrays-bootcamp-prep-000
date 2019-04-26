var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(Array, element){
  return [element, ...Array];
}

function destructivelyAddElementToBeginningOfArray(Array, element) {
Array.unshift(element)
  return Array
}

function addElementToEndOfArray(Array, element) {
  return [...Array, element]
}

function destructivelyAddElementToEndOfArray(Array, element) {
  Array.push(element)
  return Array
}

function accessElementInArray(Array, index) {
  return Array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(Array){
  Array.shift()
  return Array
}

function removeElementFromBeginningOfArray(Array) {
var myArray = Array.slice(1)
return myArray
}

function destructivelyRemoveElementFromEndOfArray(Array) {
  Array.pop()
  return Array
}

function removeElementFromEndOfArray(Array) {
var myArray = Array.slice(0, Array.length - 1)
  return myArray
}










