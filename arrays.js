var chocolateBars = ["Snickers", "Hundred Grand", "KitKat", "Skittles"]

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  return array
}

function addElementToEndOfArray(array, element) {
  array = [...array, element];
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array
}

function accessElementInArray(array, index) {
  return (array, 3)
}

function removeElementFromBeginningOfArray(array) {
    return (array.slice(1))
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
