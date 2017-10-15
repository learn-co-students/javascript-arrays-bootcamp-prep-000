var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)  {
  return array = [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element)  {
  if (array.unshift(element))
  return array;
}

function addElementToEndOfArray(array, element)  {
  return array = [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element)  {
  if (array.push(element))
  return array;
}

function accessElementInArray(array, index)  {
  console.log(array[index])
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array)  {
  if (array.shift())
  return array;
}

function removeElementFromBeginningOfArray(array)  {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array)  {
  if (array.pop())
  return array;
}

function removeElementFromEndOfArray(array)  {
  return array.slice(0, array.length - 1)
}
