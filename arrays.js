var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittle"]

function addElementToBeginningOfArray(array, element)
{
  var newArray = [element, ... array]
  return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element)
{
  var newArray = [... array, element]
  return newArray
}
function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element)
  return array
}
function accessElementInArray(array, index)
{
  var indexVal = array[index]
  return indexVal
}
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array)
{
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array
}
function removeElementFromEndOfArray(array)
{
  return array.slice(0, array.length - 1)
}
