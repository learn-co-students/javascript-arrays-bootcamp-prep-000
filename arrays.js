var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

function addElementToBeginningOfArray(array,element){
  var new_array = [element,array[0]];
  return new_array;
}

function addElementToEndOfArray(array,element){
  var new_array = [element, array[3]];
  return new_array;
}
function destructivelyAddElementToBeginningOfArray(array){

}


function destructivelyAddElementToEndOfArray(array){

}

function accessElementInArray(array,element){

}

function destructivelyRemoveElementFromBeginningOfArray(array){

}

function removeElementFromEndOfArray(array){
  array.slice(3);
}
