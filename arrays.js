var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
array.unshift(element);

return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);

  return array;
}

function addElementToEndOfArray(array, element){
  array.push(element);

  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);

  return array;
}

function accessElementInArray(array, element){
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();

  return array;
}

function removeElementFromBeginningOfArray(array){
  array.slice(1,1);

  return array;
}





