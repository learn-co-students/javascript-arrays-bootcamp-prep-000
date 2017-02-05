var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = function(myArray, myElement) {
  return [myElement, ...myArray];
}

var destructivelyAddElementToBeginningOfArray = function(myArray, myElement) {
  myArray.unshift(myElement);
  return myArray;
}

var addElementToEndOfArray = function(myArray, myElement) {
  return [...myArray, myElement];
}

var destructivelyAddElementToEndOfArray = function(myArray, myElement) {
  myArray.push(myElement);
  return myArray;
}

var accessElementInArray = function(myArray, loc) {
  return myArray[loc];
}

var removeElementFromEndOfArray = myArray => {
  myArray.pop();
  return myArray;
}

var removeElementFromBeginningOfArray = myArray => {
  myArray.shift();
  return myArray;
}
