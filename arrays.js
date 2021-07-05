var chocolateBars = 
['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return ['foo',...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, 'foo'];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array
}


function accessElementInArray(array, index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array) {
  newarray = array.slice(1);
  return newarray
}


function removeElementFromEndOfArray(array) {
  newarray = array.slice(0, array.length - 1);
  return newarray
}


function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}
