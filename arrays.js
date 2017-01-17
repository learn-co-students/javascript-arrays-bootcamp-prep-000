var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = (array, element) => {
  return [element, ...array]
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element)
  return array
}

var addElementToEndOfArray = (array, element) => {
  return [...array, element]
}

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element)
  return array
}

var accessElementInArray = (array, index) => {
  return array[index]
}

var removeElementFromBeginningOfArray = (array) => {
  array.shift()
  return array
}

var removeElementFromEndOfArray = (array) => {
  array.pop()
  return array
}
