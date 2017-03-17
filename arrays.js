var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(ary, ele) {
  ary = [ele, ...ary];
  return ary;
}


function destructivelyAddElementToBeginningOfArray(ary, ele) {
  ary.unshift(ele);
  return ary;
}

function addElementToEndOfArray(ary, ele) {
  ary = [...ary, ele];
  return ary;
}

function destructivelyAddElementToEndOfArray(ary, ele) {
  ary.push(ele);
  return ary;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array;
}
