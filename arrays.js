var chocolateBars = ['snickers', 'hundred grand',  'kitkat',   'skittles']

const array=[1]
function addElementToBeginningOfArray (array, element) {
  array=[element, ... array]
  return array
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  array=[... array, element]
  return array
}

function destructivelyAddElementToEndOfArray (array, element){
  array.push (element)
  return array
}

function accessElementInArray (array, index){
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift(1)
  return array
}

function removeElementFromBeginningOfArray (array){
  array = array.slice(-2)
  return array
}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop(1)
  return array
}

function removeElementFromEndOfArray (array){
 array = array.slice(0, array.length-1)
 return array
}


