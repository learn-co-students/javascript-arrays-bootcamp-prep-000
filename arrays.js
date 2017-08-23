chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

console.log(destructivelyAddElementToBeginningOfArray([1], 'foo'));


function addElementToBeginningOfArray(array, element)
{
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element);
  return array
}

function addElementToEndOfArray(array, element)
{
  return [...array, element]
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
  array.shift()
  return array
}

function removeElementFromEndOfArray(array)
{
  array.pop()
  return array
}

function removeElementFromBeginningOfArray(array)
{
  ary = array.slice(1)
  return ary
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array
}
