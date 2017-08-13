var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

// chocolateBars.push('snickers');
// chocolateBars.push('hundred grand');
// chocolateBars.push('kitkat');
// chocolateBars.push('skittles');
// return chocolateBars;

function addElementToBeginningOfArray(array, element) {
  [element...array];
  return ary
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element) {
  [array...element];
  return Arraysy
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var newArray.slice(0);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array.slice(-1);
  return array;
}
