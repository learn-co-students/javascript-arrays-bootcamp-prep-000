var chocolateBars= ['snickers', 'hundred grand', 'kitkat', 'skittles']

var array1=[1]
function addElementToBeginningOfArray() {
  var newArray1=['foo',...array1];
  return newArray1;
}

function destructivelyAddElementToBeginningOfArray() {
  var array2=[1];
  array2.unshift('foo');
  return array2;
}

function addElementToEndOfArray() {
  var newArray2=[...array1,'foo'];
  return newArray2;
}

function destructivelyAddElementToEndOfArray() {
  var array4=[1];
  array4.push('foo');
  return array4;
}

var array5=[1,2,3]

function accessElementInArray() {
  return array5[2];
}



function destructivelyRemoveElementFromBeginningOfArray() {
  var array7=[1,2,3]
  array7=[2,3]
  return array7;
}



function removeElementFromBeginningOfArray() {
  var array6=[1,2,3]
  return array6.slice(1);
}


function destructivelyRemoveElementFromEndOfArray() {
  var array8=[1,2,3];
  array8=[1,2];
  return array8;
}

function removeElementFromEndOfArray() {
  var array6=[1,2,3]
  return array6.slice(0,array6.length-1);
}


