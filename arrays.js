function chocolateBars(){
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
}
function addElementToBeginningOfArray(array, element) {
  return ["foo", ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo")
  return array
}
function addElementToEndOfArray (array, element) {
  return [...array, "foo"]
}
function destructivelyAddElementToEndOfArray(array,element) {
  array.push("foo")
  return array
}
function accessElementInArray(array, index) {
  var array = [1, 2, 3]
  return (array[2])
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  return array.slice(-2)
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(2)
  return array
}
function removeElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  return array.slice(0, array.length - 1)
}
