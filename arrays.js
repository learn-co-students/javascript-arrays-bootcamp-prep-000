var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(arr1, x) {
  return [x,...arr1];
}

function destructivelyAddElementToBeginningOfArray(arr2, y) {
  arr2.unshift(y);
  return arr2;
}

function addElementToEndOfArray(arr10,num10) {
  return [...arr10,num10];
}

function destructivelyAddElementToEndOfArray(arr11,num11) {
  arr11.push(num11);
  return arr11;
}

function accessElementInArray(arr3, z) {
  return arr3[z];
}

function destructivelyRemoveElementFromBeginningOfArray(arr4) {
  arr4.shift();
  return arr4;
}

function removeElementFromBeginningOfArray(arr5) {
  var arr6 = arr5.slice(1);
  return arr6;
}

function destructivelyRemoveElementFromEndOfArray(arr7) {
  arr7.pop();
  return arr7;
}

function removeElementFromEndOfArray(arr8) {
  var arr9 = arr8.slice(0,arr8.length-1);
  return arr9;
}
