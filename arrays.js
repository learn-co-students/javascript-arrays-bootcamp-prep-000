var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, beginning) {
  return [beginning, ...array];
}

function destructivelyAddElementToBeginningOfArray (array, beginning) {
  array.unshift(beginning);
  return array;
}

function addElementToEndOfArray (array, end) {
  return [...array, end];
}

function destructivelyAddElementToEndOfArray (array, end) {
  array.push (end);
  return array;
}

function accessElementInArray (array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray (array){
  var after;
  after = array.slice(1);
  return after;
}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array){
  var noEnd;
  noEnd = array.slice(0, array.length-1);
  return noEnd;
}
