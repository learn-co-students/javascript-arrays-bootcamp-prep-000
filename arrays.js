var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function addElementToBeginningOfArray(array, item) {
  return [item, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, item) {
  array.unshift(item)
  return array;
}

function addElementToEndOfArray(array, item) {
  return [...array, item];
}

function destructivelyAddElementToEndOfArray(array, item) {
  array.push(item)
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}

function displayResults(arg1, arg2) {
  console.log(`Returned: [${arg1.join(', ')}]  Array: [${arg2.join(', ')}]`);
}

displayResults(addElementToBeginningOfArray(array, 0), array);
displayResults(destructivelyAddElementToBeginningOfArray(array, 0), array);
displayResults(addElementToEndOfArray(array, 11), array);
displayResults(destructivelyAddElementToEndOfArray(array, 11), array);
console.log(`Value at index of 5 is ${accessElementInArray(array, 5)}`);
displayResults(destructivelyRemoveElementFromBeginningOfArray(array), array);
displayResults(removeElementFromBeginningOfArray(array), array);
displayResults(destructivelyRemoveElementFromEndOfArray(array), array);
displayResults(removeElementFromEndOfArray(array), array);
