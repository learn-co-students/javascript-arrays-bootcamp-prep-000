var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
    var arr = [element, ...array]; 
    return arr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 var arr = array;
  arr.unshift(element);
  return arr; 
}

function addElementToEndOfArray(array, element) {
    var arr = [...array, element]; 
    return arr;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var arr = array;
  arr.push(element);
  return arr;
}

function accessElementInArray(array, index) {
  return array[index]; 
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
 var arr = array; 
 arr.shift();  
 return arr; 
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
} 

function destructivelyRemoveElementFromEndOfArray(array) {
  var arr = array; 
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(array) {
 array = array.slice(0, array.length - 1);
 return array;
}


