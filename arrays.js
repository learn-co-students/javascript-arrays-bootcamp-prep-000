var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return  [element, ...array];

}

function destructivelyAddElementToBeginningOfArray(a, e) {
  a.unshift(e);
  return a;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, i) {
  return array[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var fin=array.slice(1);
  return fin;
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a;
}

function removeElementFromEndOfArray(a) {
  var fin=a.slice(0, a.length - 1);
  return fin;
}
