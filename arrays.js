var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];
function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element) {
array.push(element);
return array;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array, index) {
  console.log(array[3]);
  return 3;

}
function removeElementFromBeginningOfArray(array) {
  array.shift(array);
  return array;
}
  function removeElementFromEndOfArray(array) {
    array.pop(array);
    return array;
  }
