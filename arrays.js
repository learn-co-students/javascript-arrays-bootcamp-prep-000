function destructivelyRemoveElementFromBeginningOfArray(array){
  var array = array.slice(1);
  return array;
}

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;

}

function destructivelyAddElementToBeginningOfArray(array, element){
  var baws = array;
  baws.unshift(element);
  return baws;
}
function addElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyAddElementToEndOfArray(array, element){
  var baws = array;
  baws.push(element);
  return baws;
}
function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function removeElementFromEndOfArray(array){
  array.pop();
  return array;
}
