var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, ele)
{
  return [ele, ...array];
}

function addElementToEndOfArray(array, ele)
{
  return [...array, ele];
}

function destructivelyAddElementToBeginningOfArray(array, ele)
{
  array.unshift(ele);
  return array;
}

function destructivelyAddElementToEndOfArray(array, ele)
{
  array.push(ele);
  return array;
}

function removeElementFromBeginningOfArray(array)
{
  return array.slice(1);
}

function removeElementFromEndOfArray(array)
{
  var x = array.pop();
  return array;
}
function accessElementInArray(array, index)
{
  return array[index];
}
