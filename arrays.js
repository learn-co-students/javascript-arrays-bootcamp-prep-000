var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(list,element) {
  var newList = [element,...list];
  return newList;
}
///////////////////////help V
function destructivelyAddElementToBeginningOfArray(list,element) {
  list.unshift(element);
  return list;
}

function addElementToEndOfArray(list,element) {
  var newList = [...list,element];
  return newList;
}
/////////////////////help V
function destructivelyAddElementToEndOfArray(list,element) {
  list.push(element);
  return list;
}

function accessElementInArray(array,index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0,array.length-1)
}