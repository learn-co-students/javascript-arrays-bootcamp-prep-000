var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var array = [22, 33, 44];
var element = 11;
var index = "2";

function addElementToBeginningOfArray(array, elemnt){
  return [element, ...array];
};

function destructivelyAddElementToBeginningOfArray(array, elemnt){
  return array.unshift(element);
};

function addElementToEndOfArray(array, elemnt){
  return [...array, element];
};

function destructivelyAddElementToEndOfArray(array, elemnt){
  return array.push(element);
};

function accessElementInArray(array, index){
  return array[index];
};

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift(array[0]);
};
