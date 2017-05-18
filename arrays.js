var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


// function chocolateBars() {
//   return chocolateBars;
// }
//
// const array = [1]
// var element = 'foo'
//
function addElementToBeginningOfArray(array, element) {
  return ([element, ...array]);
}
//
function destructivelyAddElementToBeginningOfArray(array, element) {
  // array = [1], element = 'foo'
   (array.unshift(element));
   // array = ['foo', 1], element = 'foo'
   return array;
}
//
function addElementToEndOfArray(array, element) {
  (array.push(element));
  return array;

}
//
function destructivelyAddElementToEndOfArray(array, element) {
  (array.push(element));
  return array;
}

//
// var array = [1, 2, 3]
//
function accessElementInArray(array, index) {
  return (array[2]);
}
//
function destructivelyRemoveElementFromBeginningOfArray(array) {
  (array.shift());
  return array;
}
//
function removeElementFromBeginningOfArray(array) {
  // (array.slice(1));
  return array.slice(1);
}
//
function destructivelyRemoveElementFromEndOfArray(array) {
  (array.pop(3));
  return array;
}

function removeElementFromEndOfArray(array) {
  (array.pop(3));
  return array;
}
