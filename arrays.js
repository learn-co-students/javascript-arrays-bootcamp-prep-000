var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  array = [1];
  array = ["foo",...array];
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array = [1];
  array.unshift("foo");
  return array
}
function addElementToEndOfArray(array, element){
  array = [1];
  [...array, 'foo'];
  return array
}
function destructivelyAddElementToEndOfArray(array, element){
  array = [1];
  array.push('foo');
  return array
}
function accessElementInArray(array, index){
  array = [1];
  return array[0];
  
}
function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array = [1, 2 , 3, 4]
  array.shift(1)
  return array
}
function removeElementFromBeginningOfArray(array, element){
  array = [1, 2 , 3, 4]
  array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array, element){
  array = [1, 2 , 3, 4]
  array.shift(-1)
  return array
}
function removeElementFromEndOfArray(){
  array = [1, 2 , 3, 4]
  array.slice(-1)
  return array
}
