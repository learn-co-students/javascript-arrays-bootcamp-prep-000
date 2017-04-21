var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array, newval){
  return [newval, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, newval){
  return array.unshift(newval);
}

function addElementToEndOfArray(array, newval){
  return [...array, newval];
}

function destructivelyAddElementToEndOfArray(array, newval){
  return array.push(newval);
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
}
