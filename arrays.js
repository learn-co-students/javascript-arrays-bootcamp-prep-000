
let chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`]


function addElementToBeginningOfArray(array,elt){
  return [elt,...array ];
}

function destructivelyAddElementToBeginningOfArray(array,el){
  array.unshift(elt);
  return array;
}

function accessElementInArray(array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  let clone = array.slice();
  array.shift();
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  let clone = array.slice();
  clone.pop();
  return clone;
}
