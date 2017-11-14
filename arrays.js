var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = [];
  array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = [];
  array[0] = element;
}
