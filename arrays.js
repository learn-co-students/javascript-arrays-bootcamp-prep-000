var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function(array, element){
  var na = [element, ...array];
  return na;
}

var destructivelyAddElementToBeginningOfArray = function(array, element){
   array.unshift(element);
   return array;
}

var addElementToEndOfArray = function(array, element){
  var na = [...array, element];
  return na;
}

var destructivelyAddElementToEndOfArray = function(array, element){
  array.push(element);
  return array;
}

var accessElementInArray = function(array, index) {
  return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  array.shift();
  return array;
}

var removeElementFromBeginningOfArray = function(array){
  var na = array.slice(1);
  return na;
}

var destructivelyRemoveElementFromEndOfArray = function(array){
  array.pop();
  return array;
} 

var removeElementFromEndOfArray = function(array){
  var na = array.slice(0, array.length - 1);
  return na;
}