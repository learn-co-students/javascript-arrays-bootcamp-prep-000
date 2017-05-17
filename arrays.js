var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

var addElementToBeginningOfArray = function(array1, add2Beg) {
  return [add2Beg,...array1];
};
function destructivelyAddElementToBeginningOfArray(array2, add2Beg2) {
  array2.unshift(add2Beg2);
  return array2;
};

function addElementToEndOfArray(array3, pushEl) {
  return [...array3, pushEl];
};
function destructivelyAddElementToEndOfArray(array4, pushEl2) {
  array4.push(pushEl2);
  return array4;
};

var accessElementInArray = function(elementA, x) {
  return elementA[x];
};

var destructivelyRemoveElementFromBeginningOfArray = function(someElement) {
  someElement.shift();
  return someElement;
};
var removeElementFromBeginningOfArray = function(El) {
  return El.slice(1);
};

var destructivelyRemoveElementFromEndOfArray = function(element) {
  element.pop();
  return element;
};
var removeElementFromEndOfArray = function(elementB) {
  return elementB.slice(0,elementB.length - 1);

};
