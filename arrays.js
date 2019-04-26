var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element)
{
  var clone = array.slice(0);
  
  clone.unshift(element);
  array = clone;
  return clone;
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element)
{
  var clone = array.slice(0);
  
  clone.push("foo");
  array = clone;
  return clone;
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element);
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
  var clone = array.slice(0);
  
  clone.shift();
  array = clone;
  return clone;
}
function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array)
{
  var clone = array.slice(0);
  
  clone.pop();
  array = clone;
  return clone;
}


