chocolateBars =["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToEndOfArray(array, element){
  var outArray = new Array()
  for (key in array){
    outArray.push(array[key])
  }
  outArray.push(element);
  return outArray;
}

function addElementToBeginningOfArray(array, element){
  var outArray = new Array()
  for (key in array){
    outArray.push(array[key])
  }
  outArray.unshift(element);
  return outArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array){
  var outArray = array.slice(1);
  return outArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var outArray = array.slice(0,array.length-1);
  return outArray;
}
