// chocolate bars Array
chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element)
{
  const myArray = array
  const newArray = [element, ...myArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element)
{
  var myArray = array
  myArray.unshift(element)
  return myArray
}

function addElementToEndOfArray(array,element)
{
  const myArray = array
  const newArray = [...myArray,element]
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element)
{
  var myArray = array
  myArray.push(element)
  return myArray
}

function accessElementInArray(array, index)
{
  var myArray = array
  return myArray[index]
  
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  var myArray = array
  myArray.shift()
  return myArray
  
}

function removeElementFromBeginningOfArray(array)
{
  const myArray = array
  const newArray = myArray.slice(1)
  return newArray
  
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  var myArray = array
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(array)
{
  var myArray = array
  var newArray = myArray.slice(0, myArray.length - 1)
  return newArray
}