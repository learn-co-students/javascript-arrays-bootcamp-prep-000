chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function removeElementFromBeginningOfArray(arr)
{
  let temp = arr.slice( 1, arr.length);
  return temp;
}
function destructivelyRemoveElementFromBeginningOfArray(arr)
{
  arr.shift();
  return arr;
}
function destructivelyRemoveElementFromEndOfArray(arr)
{
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr)
{
    let temp = arr.slice( 0, arr.length - 1);
    return temp;
}

function addElementToBeginningOfArray(arr, element)
{
  let temp = [element, ...arr];
  return temp;
}

function destructivelyAddElementToBeginningOfArray(arr, element)
{
  arr.unshift(element);
  return arr;
}

function addElementToEndOfArray(arr, element)
{
  let temp = [...arr, element];
  return temp;
}

function destructivelyAddElementToEndOfArray(arr, element)
{
  arr.push(element);
  return arr;
}

function accessElementInArray(arr, index)
{
  return arr[index];
}
