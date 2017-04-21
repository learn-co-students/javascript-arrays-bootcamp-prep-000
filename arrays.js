var chocolateBars=["snickers","hundred grand","kitkat","skittles"];
function addElementToBeginningOfArray(arr,element){
  var newArr=[element, ...arr];
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(arr,a){
  arr.unshift(a);
  return arr;
}
function addElementToEndOfArray(array, element){
  var newArr=[...array, element];
  return newArr;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  var newArr = array.slice(1);
  return newArr;
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  arrNew = array.slice(0,array.length-1);
  return arrNew;
}
