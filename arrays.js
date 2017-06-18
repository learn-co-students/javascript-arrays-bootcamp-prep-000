var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(p_array, p_element)
{
  return [p_element, ...p_array];
}

function destructivelyAddElementToBeginningOfArray(p_array, p_element)
{
  p_array.unshift(p_element);
  return p_array;
}

function addElementToEndOfArray(p_array, p_element)
{
  return [...p_array, p_element];
}

function destructivelyAddElementToEndOfArray(p_array, p_element)
{
  p_array.push(p_element);
  return p_array;
}

function accessElementInArray(p_array, p_index)
{
  return p_array[p_index];
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array)
{
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array)
{
  array = array.slice(0, array.length - 1);
  return array;
}
