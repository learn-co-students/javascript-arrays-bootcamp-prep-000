
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  let copy = array;
  copy = [element,...copy];
    return copy;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  let add = array;
  add.unshift(element);
  return add;
}
function addElementToEndOfArray(array, element) {
  let arr = array;
  arr = [... arr, element];
  return arr;
}
function destructivelyAddElementToEndOfArray(array, element) {
  let addEnd = array;
  addEnd.push(element);
  return addEnd;
}

function accessElementInArray(array, index) {
  let access = array[index];

  return access;
}
function destructivelyRemoveElementFromBeginningOfArray(array, index) {
  let myArray = array;
  array.shift(index);
  return myArray;
}

function removeElementFromBeginningOfArray(array) {
  let removeArray = array;
  removeArray = removeArray.slice(1);
  return removeArray;

}
function destructivelyRemoveElementFromEndOfArray(array) {
  let arr1 = array;
  arr1.pop();
  return arr1;
}
function removeElementFromEndOfArray(array) {
  let result = array;
  result = result.slice(0, result.length-1);
  return result;
}
