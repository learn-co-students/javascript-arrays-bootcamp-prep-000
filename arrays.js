var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(arr, element){
  arr2 = arr;
  arr2.unshift(element);
  return arr2;
}
function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr;
}
function addElementToEndOfArray(arr, ele){
  arr2 = arr;
  arr2.push(ele);
  return arr2;
}
function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element);
  return arr;
}
function accessElementInArray(array, index){
  return array[index];
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
function removeElementFromEndOfArray(array){
  arr = array;
  arr.pop();
  return arr;
}