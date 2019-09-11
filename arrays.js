var chocolateBars =  ["snickers",
"hundred grand",
"kitkat",
"skittles"];

function addElementToBeginningOfArray(array, element){
  var array2 = [element, ...array];
  return array2;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  var array3 = [...array, element];
  return array3;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  var array4 = array.slice(1);
  return array4;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  var array5 = array.slice(0, array.length - 1)
  return array5
}
