var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}


function destructivelyAddElementToBeginningOfArray (array, element) {
return array.unshift(element)
}

function accessElementInArray (array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array, element)
{
  return array.shift(element)
}

function removeElementFromBeginningOfArray (array, element) {
  return array.slice(element)
}

function destructivelyRemoveElementFromEndOfArray (array, element) {
  return array.pop(element)
}

function removeElementFromEndOfArray (array, element) {
  return array.slice(0, array.length-1)
}