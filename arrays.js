var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ... array];
};

function addElementToEndOfArray(array, element) {
  return [...array, element];
};


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};


function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element);
  return array;
};

function accessElementInArray(array, idx) {
  return array[idx];
}



function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length-1);
}
