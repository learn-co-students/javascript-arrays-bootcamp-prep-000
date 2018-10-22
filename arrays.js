var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function destructivelyAddElementToBeginningOfArray  (array, elem) {
  array.unshift(elem)
  return array
}

function addElementToBeginningOfArray (array, elem) {
  let copy = array.slice()
  copy.unshift(elem)
  return copy
}


function addElementToEndOfArray (array, elem) {
  let copy = array.slice()
  copy.push(elem)
  return copy
}
function accessElementInArray (array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length -1)
}

function destructivelyAddElementToEndOfArray(array, elem){
  array.push(elem)
  return array
}
