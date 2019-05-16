chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array,element)
{
  array2 = [element, ...array]
  return array2
}
function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.upshift(element)
  return array
}
function addElementToEndOfArray(array,element)
{
  array2= [array...,element]
  return array2
}
function destructivelyAddElementToEndOfArray(array,element)
{
  array.push(element)
}
function accessElementInArray(array,index)
{
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array)

{

  return   array.slide(1)
}
function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array
}
function removeElementFromEndOfArray(array)
{

  return   array.slide(0,array.length-1)
}
