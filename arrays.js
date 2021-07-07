var chocolateBars =["snickers", "grand hundred", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element)
{
  var newArray = [element,...array];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element)
{
  var newArray = [...array, element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element);
  return array
}

function accessElementInArray(array, index)
{
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array)
{
  var element = array.slice(1)
  return element
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array
}

function removeElementFromEndOfArray(array)
{
  var element = array.slice(0, array.length-1)
  return element
}
