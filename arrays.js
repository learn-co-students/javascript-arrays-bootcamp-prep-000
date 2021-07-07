var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

chocolateBars.push('smarties');
console.log(chocolateBars);

// var cities = ['Boston', 'New York', 'Philly', 'Frisco'];
// cities.unshift('Oakland');

// [...cities];

// const cats = ['Garfield', 'Milo'];
// const moreCats = ['Felix',...cats];
// console.log(moreCats);

function addElementToBeginningOfArray(array, element) {
  let updatedArray = [];
  updatedArray = [element,...array];
  return updatedArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  let updatedArray = [];
  updatedArray = [...array, element];
  return updatedArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(-2);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length -1);
  return array;
}