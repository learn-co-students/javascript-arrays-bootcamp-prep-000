var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arrayIn, elementToAdd)
{
  var tempArray = [ elementToAdd, ...arrayIn]
  return tempArray;
}

function destructivelyAddElementToBeginningOfArray(arrayIn, elementToAdd)
{
  arrayIn.unshift(elementToAdd)
  return arrayIn;
}

function addElementToEndOfArray(arrayIn, elementToAdd)
{
  var tempArray = [...arrayIn,elementToAdd]
  return tempArray;
}

function destructivelyAddElementToEndOfArray(arrayIn, elementToAdd)
{
  arrayIn.push(elementToAdd);
  return arrayIn;
}

function accessElementInArray(arrayIn, index)
{
  return arrayIn[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayIn)
{
  arrayIn.shift()
  return arrayIn;
}

function removeElementFromBeginningOfArray(arrayIn)
{
  return arrayIn.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arrayIn)
{
  arrayIn.pop()
  return arrayIn;
}

function removeElementFromEndOfArray(arrayIn)
{
  return arrayIn.slice  (0, arrayIn.length - 1);
}