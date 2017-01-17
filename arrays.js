var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var array = [1]
  var element = "foo"
  array.unshift(element)
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  var element = "foo";
  var array = [1];

  array = [element, ...array];

  return array;
}

function destructivelyAddElementToEndOfArray(array, element){
  var element = "foo";
  var array = [1];

  array.push(element);

  return array;
}
function addElementToEndOfArray(array, element){
  var element = "foo";
  var array = [1];

  array = [...array, element];

  return array;
}

function accessElementInArray(array, index){
  var array = [1,2,3];

  return array[2];
}

function removeElementFromBeginningOfArray(array){
  var array = [1,2,3];

  var newArray = array.slice(0);

  return newArray;
}

function removeElementFromEndOfArray(array){
  var array = [1,2,3];

  array.pop()

  return array;
}
