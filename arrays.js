var chocolateBars = ["snickers", "hundred grand", "kitkat"];

function addElementToBeginningOfArray(array, element)
{
  var newArray = array;
  newArray.unshift(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element)
{
  var newArray = array;
  newArray.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element);
  return array;
}

function accessElementInArray(array, index)
{
  var element = array[index];
  return element;
}

function removeElementFromBeginningOfArray(array)
{
  var newArray = array;
  newArray.shift();
  return newArray;
}

function removeElementFromEndOfArray(array)
{
  var newArray = array;
  newArray.pop();
  return newArray;
}
