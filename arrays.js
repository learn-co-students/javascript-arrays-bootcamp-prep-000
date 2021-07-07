var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(myArray, element)
{
   myArray = [element, ...myArray];
  
  return myArray;
}

function destructivelyAddElementToBeginningOfArray(myArray, element)
{

  myArray.unshift(element);
  
  return myArray;
}

function addElementToEndOfArray(arrayParam, element)
{
  arrayParam = [...arrayParam, element];
  
  return arrayParam;
}
function destructivelyAddElementToEndOfArray(arrayParam, element)
{
  arrayParam[arrayParam.length] = element;
  
  return arrayParam;
}

function accessElementInArray(arrayToCheck, position)
{
  return arrayToCheck[position];
}
function destructivelyRemoveElementFromBeginningOfArray(arrayToDestroy)
{
  arrayToDestroy.shift();
  
  return arrayToDestroy;
}

function removeElementFromBeginningOfArray(arrayToSlice)
{
  return arrayToSlice.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(arrayToPop)
{
  arrayToPop.pop();
  
  return arrayToPop;
}

function removeElementFromEndOfArray (arrayToRemove)
{
  return arrayToRemove.slice(0, arrayToRemove.length-1);
}





