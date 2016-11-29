var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
var addElementToBeginningOfArray = function (l, e) {
  var newArray = [e, ...l];
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = function (a, e) {
  a.unshift(e);
  return a
}

function addElementToEndOfArray(a,e) {
  var newArray = [...a, e];
  return newArray
}

function destructivelyAddElementToEndOfArray(a, item) {
  a.push(item);
  return a
}

var accessElementInArray = function(a,i) {
  return a[i]
}

var destructivelyRemoveElementFromBeginningOfArray = function (a) {
  a.shift();
  return a
}

var removeElementFromBeginningOfArray = function(a) {
  var newArray = a.slice(1);
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(a) {
  a.pop();
  return a
}

function removeElementFromEndOfArray(a) {
  var newArray = a.slice( 0, a.length - 1);
  return newArray
}
