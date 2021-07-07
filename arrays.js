var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, element) { 
  var array = [element, ...chocolateBars]
  return array
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, element) {
  chocolateBars.unshift(element) 
  return chocolateBars
}

function addElementToEndOfArray (chocolateBars, element) {
  var array2 = [...chocolateBars, element]
  return array2
}

function destructivelyAddElementToEndOfArray (chocolateBars, element) {
  chocolateBars.push(element)
  return chocolateBars
}

function accessElementInArray (chocolateBars, index) {
  return chocolateBars[index] 
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars, element) {
  chocolateBars.shift(element)
  return chocolateBars
}

function removeElementFromBeginningOfArray (array) {
  var newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars, element) {
  chocolateBars.pop(element)
  return chocolateBars
}

function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length-1) 
}




