var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element) ;
  return array;
}

function addElementToEndOfArray (array, element) {
  console.log (array)
  return[...array, element]
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element) ;
  return array
}

function destructivelyRemoveElementFromBeginningOfArray (array, element) {
  array.pop()
  return array
}

function removeElementFromBeginningOfArray (array, element) {
array = [1, 2, 3];
array.shift();
return array;
}

function destructivelyRemoveElementFromEndOfArray (array, element) {
array.push();
return array;
}

function removeElementFromEndOfArray (array, element) {
  array.pop();
  return array;
}

function accessElementInArray(array, index) {
return array[index]
}