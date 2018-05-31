var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
 function addElementToBeginningOfArray(array, element) {
  var newArray = [element,...array];
  return newArray;
 }
 
 function destructivelyAddElementToBeginningOfArray (array, element) {
   array.unshift(element);
   return array;
 }
 
 function addElementToEndOfArray (array, element) {
   var newArray = [...element, array];
   return newArray;
 }
 
 function destructivelyAddElementToEndOfArray (array, element) {
   return array.push(element);
 }
  
  function accessElementInArray (array, element) {
    return array[index];
  }
  
  function destructivelyRemoveElementsFromBeginningOfArray (array) {
    array.shift()
    return array
  }
    
  function removeElementFromBeginningOfArray (array) {
    array.slice(1)
    return array
  }
    
  function destructivelyRemoveElementFromEndOfArray (array) {
    array.pop()
    return array
  }
    