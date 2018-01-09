var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
    element = 'foo'
    array = [element, ...array];
    return array
 }

function destructivelyAddElementToBeginningOfArray(array, element) {
  element = 'foo'
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
    element = 'foo'
    array = [...array, element];
    return array
 }

function destructivelyAddElementToEndOfArray(array, element) {
  element = 'foo'
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  array = [1, 2, 3]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1)
  return array
}
