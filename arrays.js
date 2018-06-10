var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(originalArray, newEl) {
  return [newEl, ...originalArray];
}

function destructivelyAddElementToBeginningOfArray(originalArry, newEl) {
  originalArray.unshift(newEl);
  return originalArray;
}

function addElementToEndOfArray(originalArray, newEl) {
  return [...originalArray, newEl];
}

function destructivelyAddElementToEndofArray(originalArray, newEl) {
  originalArray.push(newEl);
  return originalArray;
}

function accessElementArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
