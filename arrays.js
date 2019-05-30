var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];
function addElementToBeginningOfArray(array,element) {
   return [element, ...array];


}
function destructivelyAddElementToBeginningOfArray(array2,element2) {
  array2.unshift(element2);
  return array2;
}



function removeElementFromBeginningOfArray(array) {
  var a = array.slice(-2)
  return a;
}
function removeElementFromEndOfArray(array) {
  var a = array.slice(0,array.length -1);
  return a;
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function accessElementInArray(array,index) {
  return array[index]
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function addElementToEndOfArray(array,element) {
  var x = [...array, element];
  return x;
}
