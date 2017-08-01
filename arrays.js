var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (array, element) {
  var array = [element,... array];
  return array;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(arrayThree, elementThree) {
  var arrayThree = [...arrayThree, elementThree];
  return arrayThree;
}

function destructivelyAddElementToEndOfArray(arrayFour, elementFour) {
  arrayFour.push(elementFour);
  return arrayFour;
}

function accessElementInArray(arrayFive, Num) {
  return arrayFive[Num];
}

function destructivelyRemoveElementFromBeginningOfArray(arraySix) {
  arraySix.shift();
  return arraySix;
}

function removeElementFromBeginningOfArray(arraySeven) {
  var arraySeven = arraySeven.slice(1);
  return arraySeven;
}

function destructivelyRemoveElementFromEndOfArray(arrayEight) {
  arrayEight.pop();
  return arrayEight;
}

function removeElementFromEndOfArray(arrayNine) {
  var arrayNine = arrayNine.slice(0, arrayNine.length -1);
  return arrayNine;
}
