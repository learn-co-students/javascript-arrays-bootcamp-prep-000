var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var array = [1]
var element = "foo"
var index = 4

var addElementToBeginningOfArray = function(array, element) {

return [element, ...array];

}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  
  array.unshift(element);
  return array;
  
}

var addElementToEndOfArray = function(array, element) {
  return [...array, element];
  
}

var destructivelyAddElementToEndOfArray = function (array, element) {
  
  array.push(element);
  return array;
  
}

var accessElementInArray = function(array, index) {
  
  return array[index];
  
}

var destructivelyRemoveElementFromBeginningOfArray = function (array) {
  
  array.shift();
  return array;
  
}

var removeElementFromBeginningOfArray = function(array) {
  
  array = array.slice(1);
  return array;
  
}

var destructivelyRemoveElementFromEndOfArray = function(array) {
  
  array.pop();
  
  return array;
  
}

var removeElementFromEndOfArray = function(array){
  
  array = array.slice(0, array.length - 1)
  return array;
  
}















