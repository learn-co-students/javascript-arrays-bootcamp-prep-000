var chocolateBars = [
  "snickers", 
  "hundred grand", 
  "kitkat", 
  "skittles"
];

function addElementToBeginningOfArray(my_array, to_add) {
  var new_array = [to_add, ...my_array];
  return new_array;
}

function destructivelyAddElementToBeginningOfArray(my_array, to_add) {
  my_array.unshift(to_add);
  return my_array;
}

function addElementToEndOfArray(my_array, to_add) {
  var new_array = [...my_array, to_add];
  return new_array;
}

function destructivelyAddElementToEndOfArray(my_array, to_add) {
  my_array.push(to_add);
  return my_array;
}

function accessElementInArray(my_array, index) {
  var element = my_array[index];
  return element;
}

function destructivelyRemoveElementFromBeginningOfArray(my_array){
  my_array.shift();
  return my_array;
}

function removeElementFromBeginningOfArray(my_array) {
  return my_array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(my_array) {
  my_array.pop();
  return my_array;
}

function removeElementFromEndOfArray(my_array) {
  return my_array.slice(0, my_array.length - 1);
}