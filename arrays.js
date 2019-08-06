var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}


function addElementToBeginningOfArray(array, element){
  var altArray = [element, ...array];
  return altArray;
}


function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element){
  array.push(element);
  return array;
}


function addElementToEndOfArray(array, element){
  var alter = [...array, element];
  return alter;
}


function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}


function accessElementInArray(array, index){
  var access = array[index];
  return access;
}


function removeElementFromBeginningOfArray(array){
  var remove = [...array];
  remove.shift();
  return remove;
}


function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}


function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}


function removeElementFromEndOfArray(array){
  var alter = [...array];
  alter.pop();
  return alter;
}
