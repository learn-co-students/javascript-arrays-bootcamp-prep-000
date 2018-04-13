var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(){
  return ["foo",...[1]];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift("foo");
  return array;
}
function addElementToEndOfArray(){
  return [...[1],"foo"];
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push("foo");
  return array;
}
function accessElementInArray(){
  var numbers = [1,2,3];
  return numbers[2];
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromEndOfArray(){
  var numbers = [1,2,3];
  return numbers.slice(0, numbers.length-1);
}
function removeElementFromBeginningOfArray(array){
  var numbers = [1,2,3];
  return numbers.slice(-2);
}