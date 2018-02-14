var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) {
  return [element, ...array]
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
array.push(element)
return array
}

function destructivelyRemoveElementFromBeginningOfArray (array, element) {
array.shift(element)
return array
}

function accessElementInArray (array, index, element) {
element=array[index]
return element
}

function removeElementFromBeginningOfArray (array) {
 array=array.slice(1)
 return array
}

function destructivelyRemoveElementFromEndOfArray (array, element) {
  array.pop(element)
  return array
}

function removeElementFromEndOfArray (array) {
array=array.slice(0, array.length -1)
return array
}