var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//`snickers`, `hundred grand`, `kitkat`, and `skittles`.
function addElementToBeginningOfArray(testArray, newItem){
  return [newItem, ...testArray]
}

addElementToBeginningOfArray(chocolateBars, "butterfinger");

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

destructivelyAddElementToBeginningOfArray(chocolateBars, "butterfinger");

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

destructivelyAddElementToEndOfArray(chocolateBars, "butterfinger");

function accessElementInArray(array, index) {
  return array[index]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

accessElementInArray(chocolateBars, 2);

function removeElementFromBeginningOfArray(array){
  array.shift()
  return array
}

removeElementFromBeginningOfArray(chocolateBars);

function removeElementFromEndOfArray(array){
  array.pop()
  return array
}

removeElementFromEndOfArray(chocolateBars);
