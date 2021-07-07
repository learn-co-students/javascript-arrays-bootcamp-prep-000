var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]

function addElementToBeginningOfArray (array, element) {
  const arr = [...array]
  arr.unshift(element)
  return arr
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element) {
  const arr = [...array]
  arr.push(element)
  return arr
}

function destructivelyAddElementToEndOfArray (array, element) {
  array[array.length] = element
  return array
}

function accessElementInArray(array, index) {
  const element = array[index]
  return element
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  const arr = [...array]
  arr.shift()
  return arr
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  const arr = [...array]
  arr.pop()
  return arr
}

