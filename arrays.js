
function addElementToBeginningOfArray(array, element)
{
return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
return array;
}
function addElementToEndOfArray(array, element) {
//array.pop(element);
return[...array,element];

}

function destructivelyAddElementToEndOfArray (array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
  //return element.index;
  //array([])
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift(0);
array;
}


function removeElementFromBeginningOfArray(array) {
  return array.slice(1);

}

function destructivelyRemoveElementFromEndOfArray(array) {
array.pop();
//  return array;

}

function  chocolateBars() {
  var array = ["snickers", "hundred grand", "kitkat", "skittles"]
}

function removeElementFromEndOfArray(array) {
array.pop();
return array;
}
