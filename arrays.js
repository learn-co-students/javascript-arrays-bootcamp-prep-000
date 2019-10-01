var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
var foo = [element,...array];
  return foo;
}

function destructivelyAddElementToBeginningOfArray(foo, element) {
  foo.unshift(element);
  return foo;
}

function addElementToEndOfArray(array,element) {
 var foo = [...array,element];
 return foo;
}

function destructivelyAddElementToEndOfArray(foo, element) {
  foo.push(element);
  return foo;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var foo = array;
  foo = foo.slice(1);
  return foo;
}

function destructivelyRemoveElementFromEndOfArray(array) {
    array.pop();
    return array;
}

function removeElementFromEndOfArray(array) {
  var foo = array;
  foo = foo.slice(0, foo.length - 1 );
  return foo;
}
