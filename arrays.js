//1
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//2
function addElementToBeginningOfArray(array, element) {
  array = [element, ... array];
  return array;
}

//3
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

//4
function addElementToEndOfArray(array, element) {
  array = [...array, element];
  return array;
}

//5
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

//6
function accessElementInArray(array, index) {
return array[index];
}

//7
function destructivelyRemoveElementFromBeginningOfArray(array) {
    array.splice(0,1)
    return array
}

//8
function removeElementFromBeginningOfArray(array) {
  var new_array = array.slice(1)
  return new_array
  }

//9
function destructivelyRemoveElementFromEndOfArray(array){
    array.pop()
    return array
      }

//10
function removeElementFromEndOfArray(array) {
new_array = array.slice(0, -1)
return new_array
  }
