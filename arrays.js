var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element){
  addElementToBeginningOfArray = [1];
  addElementToNewArray = ["foo",...addElementToBeginningOfArray];
  return addElementToNewArray;
}

function destructivelyAddElementToBeginningOfArray (array, element){
  // array's value is [1]
  // element's value is 'foo'
  array.unshift(element);
  // array's value is now ['foo', 1]
  return array;
}
function addElementToEndOfArray (array, element){
  return [...array, element];
}
function destructivelyAddElementToEndOfArray (array, element){
  array.push(element);
  return array;
}
function accessElementInArray (array, index){
  accessElementInArray = [1,2,3];
  return accessElementInArray[2];
}
function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray (array){
  removeElementFromBeginningOfArray = [1,2,3];
  return removeElementFromBeginningOfArray.slice(1);
}
function destructivelyRemoveElementFromEndOfArray (array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray (array){
  return array.slice(0,2);
}
