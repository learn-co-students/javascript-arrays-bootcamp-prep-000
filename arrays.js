var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var array = [1,2,3]

function addElementToBeginningOfArray(array,element)
{
  newarray = [element,...array]
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array,element)
{
  newarray = [...array,element]
  return newarray;
}

function destructivelyAddElementToEndOfArray(array,element)
{
  array.push(element)
  return array;
}

function accessElementInArray(array, index)
{
  return array[index]
}

function removeElementFromBeginningOfArray(array)
{
  return array.slice(1)
}

function removeElementFromEndOfArray(array)
{
  return array.splice(0, array.length - 1)  
}