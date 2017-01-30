var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArray,element) {
  newArray = [element, ...myArray]
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(myArray,element) {
  myArray.unshift(element);
  return myArray;
}

function addElementToEndOfArray(myArray,element) {
  newArray = [...myArray, element]
  return newArray;
}

function destructivelyAddElementToEndOfArray(myArray,element) {
  myArray.push(element);
  return myArray;
}

function accessElementInArray(myArray,indexNum) {
  return myArray[indexNum];
}

function destructivelyRemoveElementFromBeginningOfArray (myArray) {
  myArray.shift()
  return myArray;
}

function removeElementFromBeginningOfArray(myArray) {
  var newArray = myArray.slice(1)
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  myArray.pop()
  return myArray;
}

function removeElementFromEndOfArray(myArray) {
  var newArray = myArray.slice(0, myArray.length - 1)
  return newArray;
}
