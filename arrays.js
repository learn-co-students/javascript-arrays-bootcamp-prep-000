var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array,valueToAddToArray)
{
  var returnArray = [valueToAddToArray, ...array];
  return returnArray;
}

function destructivelyAddElementToBeginningOfArray(array,valueToAddToArray)
{
  array.unshift(valueToAddToArray);
  return array;
}

function addElementToEndOfArray (array,valueToAddToArray)
{
  var returnArray = [...array, valueToAddToArray];
  return returnArray;
}

function destructivelyAddElementToEndOfArray(array,valueToAddToArray)
{
  array.push(valueToAddToArray);
  return array;
}

function accessElementInArray(array, index)
{
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array)
{
  var slicedArray = array.slice(1);
  return slicedArray;
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop();
  return array;
}

function removeElementFromEndOfArray (array)
{
  var slicedArray = array.slice(0, array.length -1);
  return slicedArray;
}


