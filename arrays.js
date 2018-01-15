var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const addEle = (array);
  const addEleNew = [element, ...addEle];
  return addEleNew;
}
addElementToBeginningOfArray(1, 'foo');

function destructivelyAddElementToBeginningOfArray(array, element) {
  var destEle = (array);
  destEle.unshift(element);
  return destEle;
}
destructivelyAddElementToBeginningOfArray(1, 'foo');

function addElementToEndOfArray(array, element) {
  const addEleEnd = (array);
  addEleEndNew = [...addEleEnd, element];
  return addEleEndNew;
}
addElementToEndOfArray(1, 'foo');

function destructivelyAddElementToEndOfArray(array, element) {
  var destEleEnd = (array);
  destEleEnd.push(element);
  return destEleEnd;
}
destructivelyAddElementToEndOfArray(1, 'foo');

function accessElementInArray(array, index) {
  return (array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
//  return array
}