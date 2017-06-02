var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arrayName, element) {
  var newArray = [element, ...arrayName];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arrayName, element) {
  arrayName.unshift(element);
  return arrayName;
}

function addElementToEndOfArray(arrayName, element) {
  var newArray = [...arrayName, element];
  return newArray;
}

function destructivelyAddElementToEndOfArray(arrayName, element) {
  arrayName.push(element);
  return arrayName;
}

function accessElementInArray(arrayName, index) {
  return arrayName[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayName) {
  arrayName.shift();
  return arrayName;
}

function removeElementFromBeginningOfArray(arrayName) {
  var newArray = arrayName.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(arrayName) {
  arrayName.pop();
  return arrayName;
}

function removeElementFromEndOfArray(arrayName) {
  var newArray = arrayName.slice(0, arrayName.length - 1);
  return newArray;  
}
