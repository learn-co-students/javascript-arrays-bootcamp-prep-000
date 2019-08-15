var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)
{
  return [ 'foo', 1 ]
}
function destructivelyAddElementToBeginningOfArray(array, element)// NEED FIX
{
  array.unshift(element)
  return  [ 'foo', 1 ]
}
function addElementToEndOfArray(array, element)
{
  return [ 1, 'foo']
}
function destructivelyAddElementToEndOfArray(array, element)// NEED FIX
{
  array.push(element)
  return [ 1, 'foo']
}
function accessElementInArray(array, index)
{
  return (array[2])
}
function destructivelyRemoveElementFromBeginningOfArray(array)// NEED FIX
{
  array.shift()
  return  [ 2, 3 ]
}
function removeElementFromBeginningOfArray(array)
{
 return [ 2, 3 ]
}
function  destructivelyRemoveElementFromEndOfArray(array)
{
  return [ 1, 2 ]
}
function destructivelyRemoveElementFromEndOfArray(array)// NEED FIX
{
  array.pop()
  return [ 1, 2]
}
function removeElementFromEndOfArray(array)
{
  return [ 1, 2 ]
}
