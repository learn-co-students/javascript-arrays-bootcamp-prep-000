var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
};

//addElementToBeginningOfArray();

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
};

//destructivelyAddElementToBeginningOfArray();

function addElementToEndOfArray(array, element){
  return [...array, element];
};

//addElementToEndOfArray();

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
};

//destructivelyAddElementToEndOfArray();

function accessElementInArray(array, index){
	return array[index];
};

//accessElementInArray();

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
	return array;
};

//destructivelyRemoveElementFromBeginningOfArray();

function removeElementFromBeginningOfArray(array) {
  array.shift();
	return array;
};

//removeElementFromEndOfArray();

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
};

//destructivelyRemoveElementFromEndOfArray();

  function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
};

//removeElementFromEndOfArray();
