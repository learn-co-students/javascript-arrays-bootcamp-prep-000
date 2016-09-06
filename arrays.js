var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray = function(array, element) {
  var temp = array;
  return [element, ...temp];
}

destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;
}

addElementToEndOfArray = function(array, element) {
  var temp = array;
  return [...temp, element];
}

destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
}

accessElementInArray = function(array, index) {
  return array[index];
}

destructivelyRemoveElementFromBeginningOfArray = function(array) {
  array.shift();
  return array;
}

removeElementFromBeginningOfArray = function(array) {
  array = array.slice(1);
  return array;
}

destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop();
  return array;
}

removeElementFromEndOfArray = function(array) {
  var temp = array;
  temp = array.slice(0, array.length - 1);
  return temp;
}
