var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element){
  var newArray = ['foo', ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift('foo')
  return array
}

function addElementToEndOfArray(array, element){
  var newArray = [...array, 'foo']
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push('foo')
  return array
}

function accessElementInArray(array, index){
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(-2)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}
