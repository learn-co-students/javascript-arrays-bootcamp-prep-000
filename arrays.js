var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


var array1 = ["r, r, a, y"]

function addElementToBeginningOfArray(array1, foo) {
  var nArray1 = ["foo", ...array1];
  return nArray1;
}


var array2 = ["a, r, r, a"]

function destructivelyAddElementToBeginningOfArray(array2, foo) {
  array2.unshift("foo");
  return array2;
}

function addElementToEndOfArray(array1, a) {
  var nArray2 = [...array1, "foo"];
  return nArray2;
}


var array3 = ["dmkg", "sdgasg", "wqtwe"]

function destructivelyAddElementToEndOfArray(array3, foo) {
  array3.push("foo");
  return array3;
}


var array4 = [1, 2, 3]

function accessElementInArray(array4, index) {
  return array4[2]
}


function destructivelyRemoveElementFromBeginningOfArray(array4) {
  array4.shift()
  return array4;
}

function removeElementFromBeginningOfArray(array4) {
  array4b = array4.slice(1)
  return array4b;
}

function destructivelyRemoveElementFromEndOfArray(array4) {
  array4.pop()
  return array4;
}

function removeElementFromEndOfArray(array4) {
  array4c = array4.slice(0, array4.length -1)
  return array4c;
}
