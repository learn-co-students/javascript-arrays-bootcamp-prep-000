var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}


function addElementToBeginningOfArray(array, element) {

}

function addElementtoBeginningOfArray (array, element) {
  const NewArray;
  NewArray = [element, ...array];
  return NewArray;
}
