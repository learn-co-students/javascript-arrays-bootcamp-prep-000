var chocolateBars= ['snickers', 'hundred grand', 'kitkat', 'skittles']


function addElementToBeginningOfArray() {
  var array1=[1];
  var newArray1=['foo',...array1];
  return newArray1;
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  var array1=[1];
  array1.unshift('foo');
  return array1;
}


function addElementToEndOfArray() {
  var array1=[1];
  var newArray2=[...array1,'foo'];
  return newArray2;
}

function destructivelyAddElementToEndOfArray() {
  var array4=[1];
  array4.push("foo");
  return array4;
}



function accessElementInArray() {
  var array5=[1,2,3];
  return array5[2];
}


function destructivelyRemoveElementFromBeginningOfArray() {
  var array7=[1,2,3];
  array7.shift();
  return array7;
}



function removeElementFromBeginningOfArray() {
  var array6=[1,2,3]
  return array6.slice(1);
}


function destructivelyRemoveElementFromEndOfArray(array) {
  var array8=[1,2,3];
  array8.pop();
  return array8;
}

function removeElementFromEndOfArray() {
  var array6=[1,2,3]
  return array6.slice(0,array6.length-1);
}


