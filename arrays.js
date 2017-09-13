var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array1, newelement) {
  return [newelement, ...array1];
}

function destructivelyAddElementToBeginningOfArray(array1, newelement) {
    array1.unshift(newelement);
    return array1;
}

function addElementToEndOfArray(array1, newelement) {
  return [...array, newelement];
}

function destructivelyAddElementToEndOfArray(array1, newelement) {
  array1.push(newelement);
  return array1;
}

function accessElementInArray(array1, index) {
  return array1[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array1) {
  array1.shift();
  return array1;
}

function removeElementFromBeginningOfArray(array1) {
  return array1.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array1) {
  array1.pop();
  return array1;
}

function removeElementFromEndOfArray(array1) {
  return array1.slice(0, array1.length - 1);
}
