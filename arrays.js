var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  const newar = [element, ...array];
  return newar
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  const newar = [...array, element];
  return newar
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}
 function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift()
   return array
 }

 function removeElementFromBeginningOfArray(array) {
   const newar = array.slice(1)
   return newar
 }

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  const newar = array.slice(0, array.length-1)
  return newar
}
