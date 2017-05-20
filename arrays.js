var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (array, elementtoadd) {
   return [elementtoadd,...array]
}

function destructivelyAddElementToEndOfArray (array, elementtoadd) {
  array.push(elementtoadd)
  return array
}

function addElementToEndOfArray (array, elementtoadd) {
   return [...array,elementtoadd]
}

function destructivelyAddElementToBeginningOfArray (array, elementtoadd) {
  array.unshift(elementtoadd)
  return array
}

function accessElementInArray(array, element) {
  return array[element]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1)
}
