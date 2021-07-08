var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (, ) {
  [addElementToBeginningOfArray..., ]
};
function destructivelyAddElementToBeginningOfArray (, ) {
  unshift();
};
function addElementToEndOfArray (){
  [...addElementToEndOfArray, ]
};
function destructivelyAddElementToEndOfArray(){
  push();
};
function accessElementsInArray (array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
  return array.shift();
};

function removeElementFromBeginningOfArray (array) {
  array.slice(1);
  return array;
};

function destructivelyRemoveElementFromEndOfArray (array) {
  return array.pop();
};

function removeElementFromEndOfArray (array) {
  array.slice(0, array.length-1)
};
