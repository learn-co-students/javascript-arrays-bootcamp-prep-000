var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
var addElementToBeginningOfArray = function (array, n){
  var array1 = array;
  var array2 = [n, ...array1];
  return array2;
}

var destructivelyAddElementToBeginningOfArray = function (array, n){
  array.unshift(n)
  return array;
}

var addElementToEndOfArray = function(array, n){
  var array1 = array;
  var array2 = [...array1, n];
  return array2;
}
var destructivelyAddElementToEndOfArray = function (array, n){
  array.push(n);
  return array;
}

var accessElementInArray = function(array, index){
  return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(array){
  array.shift()
  return array;
}

var removeElementFromBeginningOfArray = function(array){
  return array.slice(1);
}

var destructivelyRemoveElementFromEndOfArray = function(array){
  array.pop()
  return array
}

var removeElementFromEndOfArray = function(array){
  return array.slice(0, array.length -1)
}











