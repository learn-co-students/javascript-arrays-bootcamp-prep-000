
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(arrIn, newItem)
{
    arrIn.unshift(newItem);
    return arrIn;
}

function addElementToBeginningOfArray(arrIn, newItem)
{
  var newArray = [newItem, ...arrIn];
  return newArray;
}

function addElementToEndOfArray(arrIn, newItem)
{
  var newArray = [...arrIn, newItem];
  return newArray;
}

function destructivelyAddElementToEndOfArray(arrIn, newItem)
{
  arrIn.push(newItem);
  return arrIn;
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
  var newArray = arr.slice(1);
  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(arr)
{
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr)
{
  return arr.slice(0, arr.length - 1)
}
