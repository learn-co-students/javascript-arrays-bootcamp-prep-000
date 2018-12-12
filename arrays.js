var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var newerArray = [ ...array, element]
  return newerArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift(array)
  return array
}

function removeElementFromBeginningOfArray(array){
  var array = [2, 3]
  array.slice(0)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(array)
  return array
}

function removeElementFromEndOfArray(array){
  var array = [1, 2]
  array.slice(2)
  return array
}
