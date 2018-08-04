var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array1, elem1) {
  return [elem1, ...array1];
}

function destructivelyAddElementToBeginningOfArray(array2, elem2) {
  array2.unshift(elem2)
  return array2;
}

function addElementToEndOfArray(array3, elem3) {
  return [...array3, elem3];
}

function destructivelyAddElementToEndOfArray(array4, elem4) {
  array4.push(elem4)
  return array4;
}

function accessElementInArray(array5, index) {
  return array5[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr6) {
  arr6.shift()
  return arr6;
}

function removeElementFromBeginningOfArray(arr7) {
  arr7 = arr7.slice(1)
  return arr7;
}

function destructivelyRemoveElementFromEndOfArray(arr8) {
  arr8.pop()
  return arr8;
}

function removeElementFromEndOfArray(arr9) {
  return arr9.slice(0, arr9.length - 1);
  return arr9;
}