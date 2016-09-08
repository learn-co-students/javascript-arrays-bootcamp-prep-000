var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];


function addElementToBeginningOfArray(array,element){
  return [element,...array];//without mutating the orig array
}

function addElementToEndOfArray(array, element){
  return [...array, element]; //without mutating the orig array
}

function destructivelyAddElementToBeginningOfArray(array,element){
   array.unshift(element);
   return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[`${index}`];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop();
}
