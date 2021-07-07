var chocolateBars = ['snickers',
                     'hundred grand',
                     'kitkat',
                     'skittles']

function addElementToBeginningOfArray(array, element){
  var original = array;
  var newArray = [element, ...original];
  return newArray;
}                    

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}                   

function addElementToEndOfArray(array, element){
  var original = array;
  var newArray = [...original, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(); 
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var original = array;
  var newArray = array.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var original = array;
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}