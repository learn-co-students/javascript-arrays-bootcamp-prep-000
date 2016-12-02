var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, add) {
  var newArray = [add, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, add) {
  var result = [add, ...array];
  array.unshift(add);
  return result;
}

function addElementToEndOfArray(array, add) {
  var nArr = [...array, add];
  return nArr;
}

function destructivelyAddElementToEndOfArray(array, add) {
  var nArray = [...array, add];
  array.push(add);
  return nArray;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr) {
  var apple = arr;
  apple.shift();
  return apple;
}

function removeElementFromEndOfArray(arr) {
  var rArr = arr;
  rArr.pop();
  return rArr;
}
