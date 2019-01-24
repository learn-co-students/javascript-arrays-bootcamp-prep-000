var chocolateBars = ["snickers" , "hundred grand" , "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element)
{
  const safeArr = [element, ...array];
  return(safeArr);
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element);
  return(array);
}

function addElementToEndOfArray(array, element)
{
  const safeArr = [...array, element];
  return(safeArr);
}

function destructivelyAddElementToEndOfArray(array, element)
{
  array.push(element);
  return(array);
}

function accessElementInArray(array, index)
{
  return(array[index]);
}

function removeElementFromBeginningOfArray(array)
{
  safeArr = array.slice(1);
  return(safeArr);
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return(array);
}
function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop();
  return(array);
}
function removeElementFromEndOfArray(array)
{
  safeArr = array.slice(0, array.length - 1);
  return safeArr;
}