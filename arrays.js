var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array,element) { // example: array == [1,2,3] and element == 'foo'
    return [element, ...array]// var newArray = [element, ...array] -- what this looks like is ['foo', 1,2,3]
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

function accessElementInArray(array, index) {
  return (array[index])
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
  return array.slice(0, array.length - 1)
}
