var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
];

function addElementToBeginningOfArray(array, element) {
  var moreCandy = [element, ...array];
  return moreCandy;
}

addElementToBeginningOfArray(chocolateBars, 'butterfinger');

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){
  chocolateBars.unshift(element);
  return chocolateBars;
}

destructivelyAddElementToBeginningOfArray(chocolateBars, 'butterfinger');

function addElementToEndOfArray(array, element) {
  var moreCandy = [...array, element];
  return moreCandy;
}

addElementToEndOfArray(chocolateBars, 'butterfinger');

function destructivelyAddElementToEndOfArray(chocolateBars, element){
  chocolateBars.push(element);
  return chocolateBars;
}

destructivelyAddElementToEndOfArray(chocolateBars, 'butterfinger');

function accessElementInArray(array, index) {
  return array[index];
}
accessElementInArray(chocolateBars, 2);

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

destructivelyRemoveElementFromBeginningOfArray(chocolateBars)

function removeElementFromBeginningOfArray(array) {
  lessCandy = array.slice(1)
  return lessCandy
}

removeElementFromBeginningOfArray(chocolateBars)

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

destructivelyRemoveElementFromEndOfArray(chocolateBars)

function removeElementFromEndOfArray(array) {
  lessCandy = array.slice(0, array.length -1)
  return lessCandy
}

removeElementFromBeginningOfArray(chocolateBars)
