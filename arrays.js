var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var array = [1]
  var element=array.unshift("foo")
  return array
};

function destructivelyAddElementToBeginningOfArray(array, element) {
  var element=array.splice(0, 0, "foo")
  return array
};

function addElementToEndOfArray(array, element) {
  var array = [1]
  var element=array.push("foo")
  return array
};

function destructivelyAddElementToEndOfArray(array, element) {
  var element=array.splice(array.length, 1, "foo")
  return array
};

function accessElementInArray(array, index) {
  var index=array[2]
  return index
};

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
};

function removeElementFromBeginningOfArray(array) {
  return array=array.slice(1)
};

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
   return array
};

function removeElementFromEndOfArray(array) {
  return array=array.slice(0, array.length - 1)
};
