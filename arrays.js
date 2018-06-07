var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var tmp = [].concat(array);
  tmp.unshift(element);
  return tmp;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var tmp = [].concat(array);
  tmp.push(element);
  return tmp;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}


function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift(element);
  return array;
}

function removeElementFromBeginningOfArray(array, element) {
  var tmp = [].concat(array);
  tmp.shift(element);
  return tmp;
}

function destructivelyRemoveElementFromEndOfArray(array, element) {
  array.pop(element);
  return array;
}

function removeElementFromEndOfArray(array, element) {
  var tmp = [].concat(array);
  tmp.pop(element);
  return tmp;
}
