var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(chocolateBars, element) {
  return [element, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray() {
  return chocolateBars.unshift("more chocolate")
}

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index]
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.shift()
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  return chocolateBars.pop()
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1)
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var array2 = [...array, element]
  return array2
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
