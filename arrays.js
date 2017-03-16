var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
    var arrayTwo = array;
    arrayTwo.unshift(element);
    return arrayTwo;
}
function destructivelyAddElementToBeginningOfArray (array, element) {
    array.unshift(element);
    return array;
}
function addElementToEndOfArray (array, element) {
    var arrayTwo = array
    arrayTwo.push(element);
    return arrayTwo;
}
function destructivelyAddElementToEndOfArray (array, element) {
    array.push(element);
    return array;
}
function accessElementInArray (array, index) {
      return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray (array) {
      array.shift();
      return array;
}
function removeElementFromBeginningOfArray (array) {
      var arrayTwo = array;
      arrayTwo.shift();
      return arrayTwo;
}
function destructivelyRemoveElementFromEndOfArray (array) {
      array.pop();
      return array;
}
function removeElementFromEndOfArray (array) {
      var arrayTwo = array;
      arrayTwo.pop();
      return arrayTwo;
}
