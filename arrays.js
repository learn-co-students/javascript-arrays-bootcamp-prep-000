var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var arrayb = array;
  arrayb = [element, ...arrayb]
  return arrayb
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  var arrayc = array;
  arrayc.unshift(element);
  return arrayc
};

function addElementToEndOfArray(array, element) {
  var arrayb = array;
  arrayb = [...arrayb, element]
  return arrayb
};

function destructivelyAddElementToEndOfArray(array, element) {
  var arrayc = array;
  arrayc.push(element);
  return arrayc
};

function accessElementInArray(array, index) {
  var index;
  var arrayd = array;
  var pointLine = arrayd[index]
  return pointLine;
}

function removeElementFromBeginningOfArray(array) {
  var arraye = array
  arraye.shift();
  return arraye
}

function removeElementFromEndOfArray(array) {
  var arrayf = array
  arrayf.pop();
  return arrayf
}
