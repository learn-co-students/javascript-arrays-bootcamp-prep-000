var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]
function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  var newArray = [...array, element];
  return newArray;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}
function accessElementInArray(array, i){
  return array[i];
}
function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift(element);
  return array;
}
function removeElementFromBeginningOfArray(array){
  var firstElement = array.slice(1);
  return firstElement;
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length-1);
}
done();