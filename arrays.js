var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array1, element1) {
  var newArray1 = [element1,...array1];
  return newArray1;
}
function destructivelyAddElementToBeginningOfArray(array2, element2) {
  [array2.unshift(element2)];
  return array2;
}
function addElementToEndOfArray(array3, element3) {
  var newArray3 = [...array3,element3];
  return newArray3;
}
function destructivelyAddElementToEndOfArray(array4, element4) {
  [array4.push(element4)];
  return array4;
}
function accessElementInArray(array5, index1) {
  return array5[index1];
}
function destructivelyRemoveElementFromBeginningOfArray(array6) {
  array6.shift();
  return array6;
}
function removeElementFromBeginningOfArray(array7) {
  newArray7 = array7.slice(1);
  return newArray7;
}
function destructivelyRemoveElementFromEndOfArray(array8) {
  array8.pop();
  return array8;
}
function removeElementFromEndOfArray(array9) {
  newArray9 = array9.slice(0, array9.length - 1);
  return newArray9;
}