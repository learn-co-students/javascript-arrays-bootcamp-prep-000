var chocolateBars = ["snickers", "hundred grand", "kitkat", "snickers"];

var array = [1, 2, 3, 4];
var element = 0;
addElementToBeginningOfArray = function(array, element) {
  newArray = [element, ...array];
  return newArray
};

destructivelyAddElementToBeginningOfArray = function(array, element){
  array.unshift(element);
  return array
};

addElementToEndOfArray = function(array, element){
  newArray = [...array, element];
  return newArray
};

destructivelyAddElementToEndOfArray = function(array,element){
  array.push(element);
  return array
};

accessElementInArray = function(array, index){
  return array[index]
};

destructivelyRemoveElementFromBeginningOfArray = function(array, element){
  array.unshift(element);
  return array
};

removeElementFromBeginningOfArray = function(array){
  newArray = array.slice(1);
  return newArray
};

destructivelyRemoveElementFromEndOfArray = function(array){
  array.pop();
  return array
};

removeElementFromEndOfArray = function(array){
  newArray = array.slice(0, array.length - 1);
  return newArray
};
