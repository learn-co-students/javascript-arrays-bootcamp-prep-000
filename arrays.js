var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray (array, element){
  var arr = array.slice(0);
 arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(array, element){
  var arr = array.slice(0);
  arr.push(element);
  return arr;
}

function accessElementInArray (array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift();
  return array;
}
function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element);
  return array;
}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop();
  return array;
}


function removeElementFromBeginningOfArray(array){
  var arr = array.slice(0);
  arr.shift();
  return arr;
}
function removeElementFromEndOfArray(array){
  var arr = array.slice(0);
  arr.pop();
  return arr;
}
function destructivelyRemoveElementToEndOfArray (array){
 array.pop();
 return array;
}
function destructivelyAddElementToEndOfArray (array, element){
  array.push(element);
  return array;
}
