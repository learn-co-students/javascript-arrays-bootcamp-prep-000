var chocolateBars = ['snicker', 'hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (array, element) {
  var aETBOF = [element,...array]
  return aETBOF;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)  
  return array
}

function addElementToEndOfArray (array, element) {
  var aETEOF = [...array,element]
  return aETEOF;
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)  
  return array
}

function accessElementInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift() 
  return array;
}

function removeElementFromBeginningOfArray (array) {
  var rEFBOA = array.slice(1)
  return rEFBOA;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop() 
  return array;
}

function removeElementFromEndOfArray (array) {
  var rEFEOA = array.slice(0, array.length - 1)
  return rEFEOA;
}
