var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, element) {
  var newArray = array;
  return newArray.unshift(element);
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element);
}
