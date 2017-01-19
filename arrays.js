var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray = function(array, element) {
var newArray = [element, ...array]
  return newArray
};

destructivelyAddElementToBeginningOfArray = function(array, element) {
 array.unshift(element);
 return array;
};

addElementToEndOfArray = function(array, element) {
  var newArray = [...array, element]
    return newArray
};

destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
};

accessElementInArray = function(array, index) {
  return array[index];
};

destructivelyRemoveElementFromBeginningOfArray = function(array) {
   array.shift();
   return array;
};

removeElementFromBeginningOfArray = function(array) {
  var newArray = array.slice(1);
  return newArray;
};

destructivelyRemoveElementFromEndOfArray = function(array) {
  array.pop();
  return array;
};

removeElementFromEndOfArray = function(array) {
  var newArray = array.slice(0, array.length - 1)
  return newArray;
};
