var chocolateBars = ['snickers', 'hundred grand,' 'kitkat', 'skittles']

function addElementToBeginningOfArray(var arrayOne = ["old element"], ["new element", ...arrayOne]) {}
function destructivelyAddElementToBeginningOfArray(var arrayTwo = ["old element"], arrayTwo.unshift("new element")) {}
function addElementToEndOfArray(var arrayThree = ["old element"], [...arrayThree, "new element"]) {}
function destructivelyAddElementToEndOfArray(var arrayFour = ["old element"], [arrayFour.push("new element")]) {}

function accessElementInArray(var arrayFive = ["one", "two","three"]) {
  return [1];
}

function destructivelyRemoveElementFromBeginningOfArray(arraySix = ["one", "two", "three"]) {
  destructivelyRemoveElementFromBeginningOfArray.shift();
}

function removeElementFromBeginningOfArray(arraySeven = ["one", "two", "three"]) {
  removeElementFromBeginningOfArray(0,1);
  return removeElementFromBeginningOfArray;
}

function destructivelyRemoveElementFromEndOfArray(arrayEight = ["one", "two", "three"]) {
  destructivelyRemoveElementFromEndOfArray.pop()
  return destructivelyRemoveElementFromEndOfArray;
}

function removeElementFromEndOfArray(arrayNine = ["one", "two", "three"]) {
  removeElementFromEndOfArray.slice(0, removeElementFromEndOfArray.length - 1);
  return removeElementFromEndOfArray;
}
