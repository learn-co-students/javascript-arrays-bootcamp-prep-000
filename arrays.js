var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = [1];
  [...array, element];
<<<<<<< HEAD
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element);
  return array;
}
  
  function addElementToEndOfArray(array, element) {
  var array = [1];
  [element, ...array,];
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  var array = [1, 2, 3, 4, 5]
  return (array[index]);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1);
  var array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
 return array;
}

function removeElementFromEndOfArray(array) {

  return array.slice(0, array.length - 1)
}
=======
  return array;
}
function destructivelyAddElementToBeginningOfArray(array,element) {
  array.unshift(element);
  return array;
  }
>>>>>>> 33ee8ab4cf9ad871a70477bf96860ccf33e7bd66
