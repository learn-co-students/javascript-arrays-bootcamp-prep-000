var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
  array.unshift();
}

function destructivelyAddElementToBeginningOfArray(array, element){
array.unshift();

}

function addElementToEndOfArray(array, element){
//do not alter original array
  return array.
}

function destructivelyAddElementToEndOfArray{
  //alter original array
}

function accessElementInArray(array, index) {
   return array[index];  //return the element at that index
}

function destrucivelyRemoveElementFromBeginningOfArray(array){
  //removes first element
array.shift();
}

function removeElementFromBeginningOfArray(array){
  //removes first element. then returns entire array
  //without mutating underlying array
return array = array.slice(1);

}

function destrucivelyRemoveElementFromEndOfArray(array) {
  //removes last element; returns entire array,
  //and mutates the array
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  //removes last element; returns entire array,
  //and does not mutate the array
  return array.slice(array.length-1);
}
