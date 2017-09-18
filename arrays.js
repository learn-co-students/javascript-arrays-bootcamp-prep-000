var chocolateBars = [
    `snickers`,
    `hundred grand`,
    `kitkat`,
    `skittles`
  ]

function addElementToBeginningOfArray (array, element) {
  return [element, ...array];
}


function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray (array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array
}

function accessElementInArray (array, index) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array) {
  array = array.slice(-2);
  return array;
}

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array) {
  array = array.slice(0, array.length -1)
  return array
}
