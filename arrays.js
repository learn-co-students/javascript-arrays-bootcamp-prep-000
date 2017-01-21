var chocolateBars =['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
 newArray = [element,...array];
 return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  console.log(array);
}

function addElementToEndOfArray(array, element) {
  newArray = [array,...element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  console.log(array);
}

function accessElementInArray(array, index) {
  return array[index]
}

function removeElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromEndOfArray(array) {
  return array.pop();
}
