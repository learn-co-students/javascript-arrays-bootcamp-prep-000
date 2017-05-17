var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

// assertEqual(addElementToBeginningOfArray([1,2,3], "start"), ["start",1,2,3])
var addElementToBeginningOfArray = function(array, element) {
  // array = [1,2,3]
  // element = "start"
   var goodArray = array;
   var gooderArray = [element, ...goodArray];
   return gooderArray;
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  var badArray = array;
  badArray.unshift(element);
  return badArray;
}

var addElementToEndOfArray = function(array, element) {
  var goodArray = array;
  var gooderArray = [...goodArray, element];
  return gooderArray;
}

var destructivelyAddElementToEndOfArray = function(array, element) {
  var badArray = array;
  badArray.push(element);
  return badArray;
}

var accessElementInArray = function(array, index) {
  var EArray = array;
  return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {
  var badArray = array;
  badArray.shift();
  return badArray;
}

var removeElementFromBeginningOfArray = function(array) {
  var goodArray = array;
  var gooderArray = goodArray.slice(1);
  return gooderArray;
}

var destructivelyRemoveElementFromEndOfArray = function(array) {
  var badArray = array;
  badArray.pop() 
  return badArray
}

var removeElementFromEndOfArray = function(array) {
  var goodArray = array;
  var gooderArray = goodArray.slice(0, goodArray.length - 1);
  return gooderArray
}