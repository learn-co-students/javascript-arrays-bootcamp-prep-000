var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var arr = [element, ...array]
  return arr
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  var theBeginnging = array.unshift(element)
  return array
}


var addElementToEndOfArray = function(array, element) {
  var myArray = [...array, element]
  return myArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}


function accessElementInArray(array, index) {
  var location = array[index];
  return array[index]
}


function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}


var destructivelyRemoveElementFromEndOfArray = function(array){
  var destruct = array.pop()
  return array
}


var removeElementFromEndOfArray = function(array){
  var lastOne = array.slice(0,array.length-1)
  return lastOne
}

var removeElementFromBeginningOfArray = function(array){
  var removed = array.slice(1)
  return removed
}
