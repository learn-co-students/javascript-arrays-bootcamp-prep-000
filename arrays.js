var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,newElement) {
  var firstArray = array;
  newArray = [newElement, ...firstArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array,newElement) {
  //var array = [x];
  //array = [y, ...array];
  //array
  array.unshift(newElement);
  console.log('here it is', array);
  return array;
}

function addElementToEndOfArray(array,newElement) {
  var firstArray = array;
  newArray = [...firstArray, newElement];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array,newElement) {
  array.push(newElement);
  console.log('here it is', array);
  return array;
}

function accessElementInArray(array, index) {
  var array = [1,2,3];
  console.log('access element', array)
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  console.log('sliced array', newArray);
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1);
  //console.log(array.length);
  console.log('negative slice', newArray);
  return newArray;
}
