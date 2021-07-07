var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"];

var array = [1];
var element = "foo";

function addElementToBeginningOfArray (array, element) {return ["foo", ...array]};

function destructivelyAddElementToBeginningOfArray (array, element)
{array.unshift(element)
return array};

function addElementToEndOfArray (array, element) {return [...array, "foo"]};

function destructivelyAddElementToEndOfArray (array, element) {array.push(element)
return array};

var array = [1, 2, 3];

function accessElementInArray (array, index) {return array[2]};

var array = [1, 2, 3];

function destructivelyRemoveElementFromBeginningOfArray(array) {array.shift()
return array};

var array = [1, 2, 3];

function removeElementFromBeginningOfArray (array) {array.slice(1); array = array.slice(1);
return array};

function removeElementFromEndOfArray(array) {array.pop()
  return array};
