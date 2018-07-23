var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  var array = [...array, element];
  return array
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}

function accessElementInArray(array, index){
  var element = array[index]
  return element
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1);
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}

function removeElementFromEndOfArray(array){
  array = array.slice(0, array.length - 1);
  return array
}
