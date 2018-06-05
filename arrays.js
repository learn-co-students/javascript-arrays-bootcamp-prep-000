// variable array with some elements
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

// 2 params function to add element to beginning of array, passing on modified array
function destructivelyAddElementToBeginningOfArray(array, element)
{
  array.unshift(element)
  return array
}

// 2 params function to add element to end of array, passing on modified array
function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element)
  return array
}

// 1 param function to remove element from the end of an array, mutates array
function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array
}

// 2 params function to add element to beginning of array, passing a new array
function addElementToBeginningOfArray(array, element)
{
  return [element, ...array]
}

// 2 params function to add element to beginning of array, passing a new array
function addElementToEndOfArray(array, element)
{
  return [...array, element]
}

// 1 param remove element from beginning of array non destructive
function removeElementFromBeginningOfArray(array)
{
  
}

// 1 param remove element from end of array non destructive
function removeElementFromEndOfArray(array)
{
  
}

// 1 param returns the array with the first element removed:
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  
}