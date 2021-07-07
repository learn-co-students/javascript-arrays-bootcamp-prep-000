var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(Array,Element) {
  return [Element, ...Array]
}
function destructivelyAddElementToBeginningOfArray (Array,Element) {
  Array.unshift(Element)
  return Array
}
function addElementToEndOfArray(Array,Element) {
  return [...Array, Element]
}
function destructivelyAddElementToEndOfArray (Array,Element) {
  Array.push(Element)
  return Array
}
function accessElementInArray(Array,Index){
  return Array[Index]
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