chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element){
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

destructivelyAddElementToBeginningOfArray([1], 'foo')

function addElementToEndOfArray (array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray (array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  nArray = array.slice(1)
  return nArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  nArray = array.slice(0,array.length-1)
  return nArray
}