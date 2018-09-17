var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(Array, Element) {
  Array = [Element, ...Array];
  return Array
}
function destructivelyAddElementToBeginningOfArray(Array, Element) {
  Array.unshift(Element)
  return Array
}
function addElementToEndOfArray(Array, Element) {
  Array = [...Array, Element];
  return Array
}
function destructivelyAddElementToEndOfArray(Array, Element) {
  Array.push(Element)
  return Array
}
function accessElementInArray(Array, Index) {
  return(Array[Index])
}
function destructivelyRemoveElementFromBeginningOfArray(Array, Element) {
  Array.shift(Element)
  return Array
}
function removeElementFromBeginningOfArray(Array) {
  Array = Array.slice(1)
  return Array
}
function destructivelyRemoveElementFromEndOfArray(Array, ELement) {
  Array.pop(Element)
  return Array
}
function removeElementFromEndOfArray(Array) {
  Array = Array.slice(0, Array.length - 1)
  return Array
}
