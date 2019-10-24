var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
]

function addElementToBeginningOfArray() {
  const array = [1];
  array.unshift('foo');
  return array;
}

function destructivelyAddElementToBeginningOfArray() {
  var array = [1];
  array = ["foo",...array];
  return array;
}

function addElementToEndOfArray() {
  const array = [1];
  array.push('foo');
  return array;
}

function destructivelyAddElementToEndOfArray() {
  var array = [1];
  array = [...array,"foo"];
  return array;
}

function accessElementInArray() {
var array = [1, 2, 3];
console.log(array[2]);
}
