var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"]

function addElementToBeginningOfArray(array, element)
{
  var result = [element, ...array] // non destructive
  return result 
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  // destructive
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element)
{
  // non destructive
  var result = [...array, element]
  return result
}

function destructivelyAddElementToEndOfArray(array, element)
{
  // destructive 
  array.push(element)
  return array
}

function accessElementInArray(array, index)
{
  var result = array[index]
  return result
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array)
{
  var result = array.slice(1)
  return result
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array
}

function removeElementFromEndOfArray(array)
{
  var result = array.slice(0, array.length - 1)
  return result
}






























