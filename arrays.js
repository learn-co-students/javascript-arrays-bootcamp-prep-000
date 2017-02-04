var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles' ];


var array = [];
 
function addElementToBeginningOfArray (array, element) {
  var array = [element, ...array];
  return array;
};

var array2 = [];
function destructivelyAddElementToBeginningOfArray (array2, element) {
  array2.unshift(element);
  return array2;  
};



function addElementToEndOfArray (arrayEnd, element) {  
  var arrayEnd= [...arrayEnd, element];
  return arrayEnd;

  
};


var arrayEnd2 = [];
function destructivelyAddElementToEndOfArray (arrayEnd2, element) {
  arrayEnd2.push(element);
  return arrayEnd2;
};

function accessElementInArray (array, index) {
  array[index];
  return array[index];
};



function destructivelyRemoveElementFromBeginningOfArray (array) {
  array.shift();
  return array;
};



function removeElementFromBeginningOfArray (arraySlice) {
  var arraySlice = [1,2,3];
  var arraySlice = arraySlice.slice(1);
  return arraySlice;
};

function removeElementFromEndOfArray (arrayRemoveEnd) {
  var arrayRemoveEnd = [1,2,3];
  var arrayS = arrayRemoveEnd.slice(0,2);
  return arrayS;
};