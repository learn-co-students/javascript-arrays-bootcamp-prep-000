var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(arr, elem)
{
  var arrtwo=[elem,...arr]
  return arrtwo
}

function destructivelyAddElementToBeginningOfArray(arr, elem)
{
  arr.unshift(elem)
  return arr
}

function addElementToEndOfArray(arr, elem)
{
  var arrtwo = [...arr, elem]
  return arrtwo
}

function destructivelyAddElementToEndOfArray(arr, elem)
{
  arr.push(elem)
  return arr
}

function accessElementInArray(arr, ind)
{
  return arr[ind]
}

function destructivelyRemoveElementFromBeginningOfArray(arr)
{
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr)
{
  var arrtwo=arr.slice(1)
  return arrtwo
}

function destructivelyRemoveElementFromEndOfArray(arr)
{
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr)
{
  var arrtwo = arr.slice(0,arr.length-1)
  console.log(arrtwo)
  return arrtwo
}
