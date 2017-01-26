
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//spread... returns a new array, original unharmed. at the end.
function addElementToEndOfArray(array, point){
  var niceNewArray = [...array, point];
  return niceNewArray;
}

//more spread... for the end of the array.
function addElementToBeginningOfArray(array, point){
  return array = [point, ...array];
}


//unshift mutates the array
function destructivelyAddElementToBeginningOfArray(array, point){
  return array.unshift(point);
}

// push mutates the array
function  destructivelyAddElementToEndOfArray(array, point){
  return array.push(point);
}

function accessElementInArray(ar, ind){
  return ar[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
