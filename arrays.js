var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, b) 
{
  return [b, ...a]
  
}
  
function destructivelyAddElementToBeginningOfArray(a, b) 
{
 a.unshift(b)
 return a
}
  
function addElementToEndOfArray(a, b)
{
  return [...a, b]
}

function destructivelyAddElementToEndOfArray(a, b)
{
  a.push(b)
  return a
}

function accessElementInArray(a, b)
{
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a)
{
  a.shift()
  return a
}

function removeElementFromBeginningOfArray(array1)
{
 return array1.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array1)
{
  array1.pop()
  return array1
}

function removeElementFromEndOfArray(array1)
{
  return array1.slice(0, array1.length -1)
}

