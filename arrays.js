var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var array=[];
function addElementToBeginningOfArray(array,element){
  return [element, ...array ];
}

//we are trying to add an element to beg. of array by altering original array
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array,element){
return  [...array, element];
}

//we are trying to add an element to the end of array by altering the original arrays
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array,index) {
  return array[index];
}

//we want to return the array with the first element removed by altering the original array
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}
//we want to return the array with the last element removed and by altering the array
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1);
}
