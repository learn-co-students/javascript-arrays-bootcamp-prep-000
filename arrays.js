var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

//var rockTypes = ['igneous', 'basalt', 'granite'];

function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array];
  return newArray;
}

//addElementToBeginningOfArray(rockTypes, 'sedimentary'};

//var rockTypes = ['igneous', 'basalt', 'granite'];

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function accessElementInArray(array, indexNo) {
  return array[indexNo];
}

//destructivelyAddElementToBeginningOfArray(rockTypes, 'sedimentary'}
