var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

console.log(chocolateBars);

var addElementToBeginningOfArray = function(array, element){
  var arr2 = [element, ...array];
  return arr2;
};

var destructivelyAddElementToBeginningOfArray = function(array, element){
  array.unshift(element);
  return array;
};

var addElementToEndOfArray = function(array, element){
  var arr3 = [...array, element];
  return arr3;
};

var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element);
  return array;
};

var accessElementInArray = function(array, index){
  return array[index];
};

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  array.shift();
  return array;
};

var removeElementFromBeginningOfArray = function(array){
  return array.slice(1);
};

var destructivelyRemoveElementFromEndOfArray = function(array){
  array.pop();
  return array;
};

var removeElementFromEndOfArray = function(array){
  return array.slice(0, array.length - 1);
};

