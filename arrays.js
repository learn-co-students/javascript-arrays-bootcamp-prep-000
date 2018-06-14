
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)
{
  var Array = [element, ...array]
  return Array
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element)
{
  var Array = [...array, element]
  return Array
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element)
  return array
}

function accessElementInArray(array, index)
{
  return array[index]
}

function removeElementFromBeginningOfArray(array)
{
  var Array = array.slice(1)
  return Array
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.splice(0, 1)
  return array
}

function removeElementFromEndOfArray(array)
{
  return array.slice(0, array.length - 1)
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.splice(-1, 1)
  return array
}
