var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element)
{
  var newArray = new Array();
  newArray = [element, ...array]

  //newArray.unshift(element)
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element)
{
  var newArray = new Array();
  newArray = [...array, element]
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element)
  return array;
}

function accessElementInArray(array, index)
{
  var element = array[index]
  return element;
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array)
{
  var newArray = new Array;
  newArray = array.slice(1)
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array)
{
  var newArray = new Array;
  newArray = array.slice(0, array.length - 1)
  return newArray;
}
