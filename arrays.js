/*
1) arrays chocolateBars is an array containing "snickers", "hundred grand", "kitkat", and "skittles":
     ReferenceError: chocolateBars is not defined
      at Context.it (test/arrays-test.js:15:14)
*/
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

/*
2) arrays addElementToBeginningOfArray(array, element) adds an `element` to the beginning of an `array`:
     ReferenceError: addElementToBeginningOfArray is not defined
      at Context.it (test/arrays-test.js:21:14)
*/
function addElementToBeginningOfArray(array, element){
  const arrayorg = array
  array.unshift(element)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  const arrayorg = array
  array.push(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  var ar = array
  return ar[parseInt(index)]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var ar = array
  ar.shift()
  return ar
}

function removeElementFromBeginningOfArray(array){
  var ar = array
  return ar.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  var ar = array
  ar.pop()
  return ar
}

function removeElementFromEndOfArray(array){
  var ar = array
  return ar.slice(0,ar.length-1)
}
