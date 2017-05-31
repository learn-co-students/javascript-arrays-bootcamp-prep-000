var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = [1];
  var newArray =[element, ...array];
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [1];
  return [element, ...array]
}
