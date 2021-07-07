
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var addElementToBeginningOfArray = function(array, element){
  const arr2 = [element,...array];
  return arr2;
};

var destructivelyAddElementToBeginningOfArray = function(array, element){
  var arr = array;
  arr.unshift(element);
  return arr;
};

var addElementToEndOfArray = function(array, element){
  const arr2 = [...array,element];
  return arr2;
}

var destructivelyAddElementToEndOfArray = function(array, element){
  var arr = array;
  arr.push(element);
  return arr;
}

var accessElementInArray = function(array, index){
  var element = array[index];
  return element;
}

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  array.shift();
  return array;
}

var removeElementFromBeginningOfArray = function(array){
  var arr = array.slice(1);
  return arr;
}

var destructivelyRemoveElementFromEndOfArray = function(array){
  array.pop();
  return array;
}

var removeElementFromEndOfArray = function(array){
  return array.slice(0, array.length -1);
}
