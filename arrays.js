var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
var array = [1]
return ["foo", ...array]
}

function destructivelyAddElementToBeginningOfArray(array) {
  array.unshift("foo")
  return array
}

function addElementToEndOfArray() {
var array = [1]
return [...array, "foo"]
}

function destructivelyAddElementToEndOfArray(array) {
  array.push("foo")
  return array
}

function accessElementInArray() {
  var array = [1, 2, 3]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(){
  var array = [1, 2, 3]
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(){
  var array = [1, 2, 3];
  return array.slice(0, array.length - 1)
}
