var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
var addElementToBeginningOfArray = function(array, element){
  return newArray = [element, ...array];
}
var destructivelyAddElementToEndOfArray = function (array, element){
  return array.push(element);
}
var addElementToEndOfArray = function(array, element){
  return newArray = [...array, element];
}

var destructivelyAddElementToBeginningOfArray = function(array, element){
  return array.unshift(element);
}
