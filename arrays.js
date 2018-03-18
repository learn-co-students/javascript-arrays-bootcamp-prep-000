var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

// addElementToBeginningOfArray([1,2,3], 'foo');

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  // var colors = [green, red, blue];
  // colors[0] // green
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 // [1,2,3]
   array.shift();
 // [2,3]
   return array;
}
// a [2,3]

function removeElementFromBeginningOfArray(array) {
    return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();

}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1);
}
