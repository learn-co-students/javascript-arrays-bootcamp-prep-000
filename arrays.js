var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


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
  var arrayEnd = [...array, element];
  return arrayEnd;
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element);
  return array;
}

function accessElementInArray(array, n)
{
  return array[n];
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array)
{
  var arraySlice = array.slice(1);
  return arraySlice;
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array)
{
  var slicedArray = array.slice(0, array.length - 1);
  return slicedArray;
}







  
  
  
  
  
  