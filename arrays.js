var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (array, element) => {
  const copy = array.slice();
  copy.unshift(element);
  return copy;
}

var removeElementFromEndOfArray = array => {
  const copy = array.slice()
  copy.pop();
  return copy;
}

var destructivelyRemoveElementFromEndOfArray = array => {
  array.pop();
  return array;
}

var removeElementFromBeginningOfArray = array => {
  const copy = array.slice();
  copy.shift();
  return copy;
}

destructivelyRemoveElementFromBeginningOfArray = array => {
  array.shift();
  return array;
}

var accessElementInArray = (array, index) => array[index];

var destructivelyAddElementToEndOfArray = (array, element) => {
  array.push(element);
  return array;
}

var addElementToEndOfArray = (array, element) => {
  const copy = array.slice();
  copy.push(element);
  return copy;
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  array.unshift(element);
  return array;
}