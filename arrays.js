var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  var array = [1];
  array = ['foo', ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = [1];
  array.unshift('foo');
  return array;
}

function addElementToEndOfArray(array, element){
  var array = [1];
  array = [...array, 'foo'];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  var array = [1];
  array.push('foo');
  return array;
}

function accessElementInArray(array, index){
  var array = [1,2,3];
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  var array = [1,2,3];
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var array = [1,2,3];
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  var array = [1,2,3];
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var array = [1,2,3];
  array = array.slice(0, array.length - 1);
  return array;
}
