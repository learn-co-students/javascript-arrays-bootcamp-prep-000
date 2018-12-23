var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, thing){
  return [thing, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, thing){
  array.unshift(thing)
  return array
}

function addElementToEndOfArray(array, thing){
  return [...array, thing]
}

function destructivelyAddElementToEndOfArray(array, thing){
  array.push(thing)
  return array
}

function accessElementInArray(array, start){
  return array[start]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

function removeElementFromEndOfArray(array){
  return array.slice(0,-1)
}

destructivelyRemoveElementFromEndOfArray([1,2,3])