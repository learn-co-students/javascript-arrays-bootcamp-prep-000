var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ]; 
function addElementToBeginningOfArray (array,element) {
  var addElementToBeginningOfArray = [];
addElementToBeginningOfArray =  [ element, ...array];
return addElementToBeginningOfArray 
}
function destructivelyAddElementToBeginningOfArray (array,element) {
  array.unshift(element);
  return array;
}
  function addElementToEndOfArray (array,element) {
    var new_array = array;
    new_array = [...array,element];
    return new_array;
  }
  function destructivelyAddElementToEndOfArray (array,element) {
    array.push(element);
    return array;
  }
  function accessElementInArray (array, index) {
    var new_access = array[index];
    return new_access;
  }
function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
}
function removeElementFromBeginningOfArray (array) {
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray (array) {
 array.pop(); 
 return array;
}
function removeElementFromEndOfArray (array) {
  return array.slice(0, array.length - 1 );
}
