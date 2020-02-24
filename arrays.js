var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  
  function addElementToBeginningOfArray (array,element) {
  var result = [element,...array];
   return result
  }
 
  
  function destructivelyAddElementToBeginningOfArray (array,element) {
    array.unshift(element);
    return array;
  }
  
  function addElementToEndOfArray (array, element) {
    var result = [...array,element];
    return result;
  }
  
  function destructivelyAddElementToEndOfArray (array,element) {
    array.push(element);
    return array;
  }
  function accessElementInArray(array,index) {
   var element = array[index];
   return element;
  }
  
  function destructivelyRemoveElementFromBeginningOfArray (array) {
    array.shift();
    return array;
  }
  
  function removeElementFromBeginningOfArray(array) {
   var newArray = array.slice(1);
    return newArray;
  }
  
  function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
  }
  
  function removeElementFromEndOfArray(array) {
    var newArray = array.slice(0,array.length -1);
    return newArray;
  }
  