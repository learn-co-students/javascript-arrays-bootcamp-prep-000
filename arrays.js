var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element) 
{
  var newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element)
{
  var newarray = [...array, element]
  return newarray
}

function destructivelyAddElementToEndOfArray(array,element)
{
  array.push(element)
  return array
}

function accessElementInArray(array,index)
{
  return array[parseInt(index)]
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array)
{
  var removeFirstElement = array.slice(1)
  return removeFirstElement
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