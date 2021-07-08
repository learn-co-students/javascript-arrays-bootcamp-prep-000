var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//add
function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToEndOfArray(array, element){
  return [...array, element];
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

//access
function accessElementInArray(array, index){
return array[index];
}

//remove
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
console.log(destructivelyRemoveElementFromEndOfArray([1, 2, 3]));
