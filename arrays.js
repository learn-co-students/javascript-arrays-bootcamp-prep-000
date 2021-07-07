var chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element) {
  [...array, element];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

function accessElementInArray(array, index) {
  console.log(array[index]);
  return array;

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
}

function removeElementFromBeginningOfArray(array) {
  array.slice(0)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length -1 )
}