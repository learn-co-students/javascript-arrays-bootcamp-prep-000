
var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(myarray, toadd) {
  newarray = [toadd, ...myarray];
  return newarray
}

function destructivelyAddElementToBeginningOfArray(myarray, toadd) {
  newarray1 = myarray.unshift(toadd);
  return myarray
}

function addElementToEndOfArray(myarray, toadd) {
  return [...myarray, toadd]
}

function destructivelyAddElementToEndOfArray(myarray, toadd) {
  newarray2 = myarray.push(toadd);
  return myarray
}

function accessElementInArray(myarray, myindex) {
  return myarray[myindex]
}

function destructivelyRemoveElementFromBeginningOfArray(myarray) {
  newarray = myarray.shift();
  return myarray
}
function removeElementFromBeginningOfArray(myarray) {
  return myarray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(myarray) {
  myarray.pop();
  return myarray
}

function removeElementFromEndOfArray(myarray) {
  return myarray.slice(0, myarray.length-1);
}
