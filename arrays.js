//create new array chocolateBars with items snickrs, jundre grand, kitkat and skittles  
chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
//Add addElementToBeginningOfArray array, element element to beginning of array without changing array
function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}
//add element to beginning of destructivelyAddElementToBeginningOfArray with array and element changing array forever
function destructivelyAddElementToBeginningOfArray(array, element){
  //we need to change the array, to add to start of array use method unshift on the array
  array.unshift(element);
  //return the new array with the element included in the start of the array
  return array;
}
//add an array, element to the end of an addElementToEndOfArray array without changing array forever
function addElementToEndOfArray(array, element){
  return [...array, element];
}
//add an element to end of array, element destructivelyAddElementToEndOfArray array changing array forever
function destructivelyAddElementToEndOfArray(array, element){
  //we want to add element to the end of the array, in order to do that we use the push method
  array.push(element);
  //return the newly created array that is changed forever in this function.
  return array;
}
//create an accessElementInArray array that returns the array value at index
function accessElementInArray(array,index){
  //to return the X item at index value we return the array at position index
  return array[index];
}

//Takes an destructivelyRemoveElementFromBeginningOfArray array as its only argument and removes the first element then returns array
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}
//takes removeElementFromBeginningOfArray array as only arument and removes an element form the beginning of the array without changing it
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
  
}
//remove element from end of array removeElementFromEndOfArray, array
function removeElementFromEndOfArray(array){
  //so we want to return the array minus its last element. To do that we slice the array to index 0(first item) to last item-1
  return array.slice(0, array.length -1);
}

