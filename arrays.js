var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a,b) {
  var newArray = a.unshift(b);
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(a,b) {
  return a.unshift(b);
}
