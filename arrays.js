var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];


function addElementToBeginningOfArray(array1, element1) {
  var newArr = [element1, ...array1];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array2, element2) {
  array2.unshift(element2);
  return array2;
}

function addElementToEndOfArray(array3, element3) {
  var newArr = [...array3, element3];
  return newArr;
}

function destructivelyAddElementToEndOfArray(array4, element4) {
  array4.push(element4);
  return array4;
}

function accessElementInArray(array5, index5) {
  return array5[index5];
}

function destructivelyRemoveElementFromBeginningOfArray(array6) {
  array6.shift();
  return array6;
}

function removeElementFromBeginningOfArray(array7) {
  var slicedArr = array7.slice(1);
  return slicedArr;
}

function destructivelyRemoveElementFromEndOfArray(array8) {
  array8.pop();
  return array8;
}

function removeElementFromEndOfArray(array9) {
  var newArr = array9.slice(0, array9.length - 1);
  return newArr;
}
