
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, item){
  var newArray = array;
  newArray.unshift(item);
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, item){
  array.unshift(item);
  return array;
}
