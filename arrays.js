var chocolateBars = ["snickers","hundred grand","snickers","kitkat","skittles"]

function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element);
  array;
  return array;
}


function addElementToBeginningOfArray(array,element)
{
    array = [element, ...array]
    array;
    return array;
}


function destructivelyAddElementToEndOfArray(array,element)
{
  array.push(element);
  array;
  return array;
}


function addElementToEndOfArray(array, element)
{
  array = [...array, element];
  array;
  return array;
}

function accessElementInArray(array,index)
{
  return array[index];
}


function removeElementFromBeginningOfArray(array)
{
  array.shift();
  array;
  return array;
}

function removeElementFromEndOfArray(array)
{
  array.pop()
  array;
  return array;
}
