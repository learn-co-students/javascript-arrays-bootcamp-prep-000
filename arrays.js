var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var array = ['foo', 1];
  ['element', ...array];
  return(array);
};

function destructivelyAddElementToBeginningOfArray() {
  var array = [1, 2];
  array.unshift('foo');
  return (array);
};

function addElementToEndOfArray() {
  var array = ['foo', 1];
  [ ...array,'element'];
  array
};

function destructivelyAddElementToEndOfArray() {
  var array = [1];
  array.push = ['foo'];
  array;
};

function accessElementInArray() {
  var array = ['foo', 1, 2];
  array[1];
};

function destructivelyRemoveElementFromBeginningOfArray() {
  var numbers = [1, 2, 3];
  numbers = numbers.shift();
  return numbers;
};

function removeElementFromBeginningOfArray() {
  var numbers = [1, 2, 3, 4];
  numbers = numbers.slice[1];
};

function destructivelyRemoveElementFromEndOfArray() {
  var array = [1, 2, 3];
  array.pop();
  //array
};

function removeElementFromEndOfArray() {
  var array = [1, 2, 3];
  array.slice(0, array.length -1);
  array;
};
