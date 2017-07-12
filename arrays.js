var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  arr= [element, ...array];
  return(arr);
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return(array);
}
function addElementToEndOfArray(array, element) {
  a= [...array, element];
  return(a);
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return(array);
}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return (array);
  }
  function removeElementFromBeginningOfArray(array) {
    a=array.slice(1);
    return(a);
  }
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return (array);
  }
function removeElementFromEndOfArray(array) {
  a = array.slice(0, array.length - 1); 
  return (a);
}
