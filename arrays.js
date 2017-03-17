var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

function addElementToBeginningOfArray(myArray,element) {
  var newArray = [element, ...myArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(myArray,element) {
  myArray.unshift(element)
}

function accessElementInArray(myArray,index) {
  return myArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  return myArray.shift()
}

function removeElementFromBeginningOfArray(myArray) {
  var newArray = myArray.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(myArray) {
  return myArray.slice(0, myArray.length - 1)
}
