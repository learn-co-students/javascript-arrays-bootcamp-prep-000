var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element){
  var unchangedArray = [array [0],element];
  return unchangedArray;
}
function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
 return array;
}
function addElementToEndOfArray(array, element){
  var originalArray = [array[0],element];
  return originalArray;
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}
var myArray = [];
function accessElementInArray(array, index){
  
  return myArray;
}
function removeElementFromEndOfArray(array, element){
  var updatedArray = array.slice(element, array.length - 1);
  return updatedArray;
}
function destructivelyRemoveElementFromEndOfArray(array, element){
  var mutatedArray = array.pop(element);
  return mutatedArray;
}