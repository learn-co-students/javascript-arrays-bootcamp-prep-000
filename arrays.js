var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, toadd)
{
  return [toadd, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, toadd)
{
  array.unshift(toadd)
  return array
}
function addElementToEndOfArray(array, toAdd)
{
  return [...array, toAdd]
}
function destructivelyAddElementToEndOfArray(array, toAdd)
{
  array.push(toAdd)
  return array
}
function accessElementInArray(array, i)
{
  return array[i]
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
  return array.slice(0,array.length - 1)
}
