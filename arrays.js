
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(arrIn, newItem)
{
    arrIn.push(newItem);
    return arrIn;
}

function addElementToBeginningOfArray(arrIn, newItem)
{
  var newArray = [...arrIn, newItem];
  return newArray;
}

function accessElementInArray(arr, index)
{
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr)
{
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr)
{
  return arr.slice(1);
}

function removeElementFromBeginningOfArray(arr)
{
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr)
{
  return arr.slice(0, arr.length - 1)
}
