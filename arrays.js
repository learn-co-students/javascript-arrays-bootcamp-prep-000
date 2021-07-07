var chocolateBars = ["snickers", "hundred graand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element)  {
  var temp  = [element,...array];
  return temp
}

function destructivelyAddElementToBeginningOfArray(array, element)  {
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element)  {
  var temp = [...array, element];
  return temp;
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
function accessElementInArray(array, index)  {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array,element){
  array.shift(0);
  return array;
}
function removeElementFromBeginningOfArray(array, element) {
 var temp = array;
 temp = temp.slice(1);
 return temp;
} 
function destructivelyRemoveElementFromEndOfArray(array, element)  {
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array, element)  {
  var temp = array;
  temp = temp.slice(0,temp.length -1);
  return temp;
}