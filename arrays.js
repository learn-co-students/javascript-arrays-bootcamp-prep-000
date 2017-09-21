var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (myArray, myElement) {
  var mySecondArray = [myElement, ...myArray]
  return mySecondArray
}

function destructivelyAddElementToBeginningOfArray (myArray, myElement) {
  myArray.unshift(myElement)
  return myArray
}

function addElementToEndOfArray (myArray, myElement) {
  var mySecondArray = [...myArray, myElement]
  return mySecondArray
}

function destructivelyAddElementToEndOfArray (myArray, myElement) {
  myArray.push(myElement)
  return myArray
}

function accessElementInArray (myArray, myIndex) {
  return myArray[myIndex];
}

function destructivelyRemoveElementFromBeginningOfArray (myArray) {
  myArray.shift();
  return myArray
}

function removeElementFromBeginningOfArray (myArray) {
  mySecondArray = myArray.slice(1)
  return mySecondArray
}

function destructivelyRemoveElementFromEndOfArray (myArray) {
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray (myArray) {
  mySecondArray = myArray.slice(0, myArray.length - 1)
  return mySecondArray
}
