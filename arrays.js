//1) arrays chocolateBars is an array containing "snickers", "hundred grand", "kitkat", and "skittles":
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles",
]


//2) arrays addElementToBeginningOfArray(array, element) adds an `element` to the beginning of an `array`:
//3) arrays addElementToBeginningOfArray(array, element) does not alter `array`:
function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

//4) arrays destructivelyAddElementToBeginningOfArray(array, element) adds an `element` to the beginning of an `array`:
//5) arrays destructivelyAddElementToBeginningOfArray(array, element) alters `array`:
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
}

//6) arrays addElementToEndOfArray(array, element) adds an `element` to the end of an `array`:
//7) arrays addElementToEndOfArray(array, element) does not alter `array`:
function addElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

//8) arrays destructivelyAddElementToEndOfArray(array, element) adds an `element` to the end of an `array`:
//9) arrays destructivelyAddElementToEndOfArray(array, element) alters `array`:
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array;
}

//10) arrays accessElementInArray(array, index) accesses the element in `array` at the given `index`:
function accessElementInArray(array, index) {
  array = array[index];
  return array;
}


//11) arrays destructivelyRemoveElementFromBeginningOfArray(array) returns the `array` with the first element removed:
//12) arrays destructivelyRemoveElementFromBeginningOfArray(array) did not make a copy of the array when removing the first element:
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}


//13) arrays removeElementFromBeginningOfArray(array) removes the first element from the `array`:
function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}


//14) arrays destructivelyRemoveElementFromEndOfArray(array) returns the `array` with the last element removed:
//15) arrays destructivelyRemoveElementFromEndOfArray(array) did not make a copy of the array when removing the last element:

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(3)
  return array;
}


//16) arrays removeElementFromEndOfArray(array) removes the last element from the `array`:
function removeElementFromEndOfArray(array) {
  array.pop(3)
  return array;
}
