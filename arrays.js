
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  console.log(newArray);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  console.log(array);
  return array;
}


function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  // console.log(array);
  return array

}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
array.shift();
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  console.log(array)
  return array
}

function removeElementFromBeginningOfArray(array) {
    array = array.slice(1);
    console.log(array)
    return array
}



function removeElementFromEndOfArray(array) {

    array = array.slice(0, array.length-1);
    console.log(array);
    return array;
}

console.log(chocolateBars);
removeElementFromEndOfArray(chocolateBars);
console.log(chocolateBars);
