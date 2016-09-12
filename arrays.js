var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var newarray = array;
  newarray.unshift(element);
  return newarray;

}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var newarray = array;
  newarray.push(element);
  return newarray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
   var element = array[index];
   return element;
}

function removeElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array){
  array.pop();
  return array;
}
