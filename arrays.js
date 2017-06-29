var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array,ele){
  array.unshift(ele);
  return array;
}
function destructivelyAddElementToBeginningOfArray(array,ele){
array.unshift(ele);
return array;
}
function addElementToEndOfArray(array,ele){
  array.push(ele);
  return array;
}
function destructivelyAddElementToEndOfArray(array,ele){
array.push(ele);
return array;
}
function accessElementInArray(array, index){

  return array[index];
}
function removeElementFromBeginningOfArray(array){
  array.shift();
  return array;
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
 array.pop();
 return array;
}
