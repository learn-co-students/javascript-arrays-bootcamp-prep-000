var chocolateBars = ["snickers", "hundred grand", "kikat", "skittles"];

function addElementToBeginningOfArray(array, element) {
   const newArray = [element, ...array]
   return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,element){
    array.unshift(element);
    return array;
  }  
  
  function addElementToEndOfArray(array, element) {
    const newArrays = [...array, element]
    return newArrays;
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array
  }
  
  function accessElementInArray(element, index) {
    return element[index];
  }
  
  
  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
    
  }
  
  function removeElementFromBeginningOfArray(array) {
    var newList = array.slice(1);
    return newList;
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop()
    return array;
  }
  
  function removeElementFromEndOfArray(array) {
    var newListArray = array.slice(0, array.length -1);
    return newListArray;
  }
  
  
  