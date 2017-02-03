var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(anArray, element) {
  var newArray = anArray.slice();

  newArray.unshift(element)

  return newArray;


}

function destructivelyAddElementToBeginningOfArray(anArray, element) {
  anArray.unshift(element);
  return anArray;

}

function addElementToEndOfArray(anArray, element) {
  var newArray = anArray.slice();

  newArray.push(element)

  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    return array;
}

function accessElementInArray(arrayAccess, indexAccess) {
  return arrayAccess[indexAccess];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayDes) {
  return arrayDes.shift();
}

function removeElementFromBeginningOfArray(array) {
  array.shift()

  return array;
}

function removeElementFromEndOfArray(array) {
  array.pop()

  return array;
}
