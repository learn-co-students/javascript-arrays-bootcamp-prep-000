var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element)
{
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(myArray, somethingToAdd)
{
  myArray.unshift(somethingToAdd);
  return myArray;
}

function addElementToEndOfArray(myArray, somethingToAdd)
{
  return [...myArray, somethingToAdd];
}

function destructivelyAddElementToEndOfArray(myArray, somethingToAdd)
{
  myArray.push(somethingToAdd);
  return myArray;
}

function accessElementInArray(myArray, myIndex)
{
  return myArray[myIndex];
}

function destructivelyRemoveElementFromBeginningOfArray(myArray)
{
  myArray.shift();
  return myArray;
}

function removeElementFromBeginningOfArray (myArray)
{
  return myArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(myArray)
{
  myArray.pop();
  return myArray;
}

function removeElementFromEndOfArray(myArray)
{
  return myArray.slice(0, myArray.length - 1);
}