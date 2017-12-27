var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray([x], z) {
  var array = [x]
  return [z,...array]
}
addElementToBeginningOfArray([1], 2)


var thing = [];
function destructivelyAddElementToBeginningOfArray(thing, z) {
  thing.unshift(z);
  return thing
}

var addTest = [];
function addElementToEndOfArray(addTest, x) {
  newAdd = [...addTest, x];
  return newAdd;
}

var destroyTest = [];
function destructivelyAddElementToEndOfArray(destroyTest, x) {
  destroyTest.push(x)
  return destroyTest
}

var whatever = []
function accessElementInArray(whatever, x) {
  return whatever[x]
}

var destroy = []
function destructivelyRemoveElementFromBeginningOfArray(destroy) {
  destroy.shift()
  return destroy
}

var notDestroy = []
function removeElementFromBeginningOfArray(notDestroy) {
  newDestroy = notDestroy.slice(1)
  return newDestroy
}

var popTest = []
function destructivelyRemoveElementFromEndOfArray(popTest) {
  popTest.pop()
  return popTest
}

var sliceTest = []
function removeElementFromEndOfArray(sliceTest) {
  newList = sliceTest.slice(0, 2)
  return newList
}