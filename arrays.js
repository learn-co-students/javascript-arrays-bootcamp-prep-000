var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(inputArray, elementToAdd) {
  var newArray = [elementToAdd, ...inputArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(inputArray, elementToAdd) {;
    inputArray.unshift(elementToAdd);
    return inputArray;
}

function addElementToEndOfArray(inputArray, elementToAdd) {
  var temporaryArray = new Array();
  temporaryArray = [...inputArray];
  temporaryArray.push(elementToAdd);
  return temporaryArray;
}

function destructivelyAddElementToEndOfArray(inputArray, elementToAdd) {
    inputArray.push(elementToAdd);
    return inputArray;
}

function accessElementInArray(inputArray, elementIndex) {
  return inputArray[elementIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(inputArray) {
  inputArray.shift();
  return inputArray;
}

function removeElementFromBeginningOfArray(inputArray) {
  return inputArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(inputArray) {
  inputArray.pop();
  return inputArray;
}

function removeElementFromEndOfArray(inputArray) {
    return inputArray.slice(0, inputArray.length - 1);

}
