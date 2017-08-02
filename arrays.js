
function destructivelyaddElementToBeginningOfArray(n,newArray) {
  newArray.unshift(n);
  return newArray
}
function addElementToBeginningOfArray(n,newArray) {
  return [n,...newArray];
}

function accessElementInArray (newArray, n) {
  return newArray[n];
}

function destructivelyRemoveElementFromBeginningOfArray (Array1) {
  Array1.shift();
  return Array1
}

function removeElementFromBeginningOfArray (Array1) {
  return Array1.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (Array1) {
Array1.pop();
return Array1
}

function removeElementFromEndOfArray (Array1) {
  return Array1.slice(0, Array1.length - 1);
}
