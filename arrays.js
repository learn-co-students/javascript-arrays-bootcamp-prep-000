var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  array = [element, ...array]
  return array

}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element)
  return array

}

function addElementToEndOfArray(array,element) {
  c = [...array, element]
  return c

}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array

}

function accessElementInArray(array,index) {
  return array[index]

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  c = array.slice(1)
  return c
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  c = array.slice(0,(array.length - 1))
  return c
}
