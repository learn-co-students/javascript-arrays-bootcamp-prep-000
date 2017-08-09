var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(myArray, myElement) {
  var myNewArray = [myElement, ...myArray];
  return myNewArray;
};

function destructivelyAddElementToBeginningOfArray(myArray, myElement) {
  myArray.unshift(myElement);
  return myArray;
};

function addElementToEndOfArray(myArray, myElement) {
  var myNewArray = [...myArray, myElement];
  return myNewArray;
};

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
};

function accessElementInArray(myArray, myIndex) {
  return myArray[myIndex];
};

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  myArray.shift();
  return myArray;
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
