var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];

var arr = 1;
var ele = "foo";

function addElementToBeginningOfArray (arr, ele)
{
  return [ele, ...arr];
}

function destructivelyAddElementToBeginningOfArray (arr, ele)
{
 arr.unshift(ele);
 return arr;
}

function addElementToEndOfArray (arr, ele)
{
  return [...arr, ele];
}

function destructivelyAddElementToEndOfArray (arr, ele)
{
 arr.push(ele);
 return arr;
}

function accessElementInArray (arr, int)
{
  return arr[int];
}

function destructivelyRemoveElementFromBeginningOfArray(arr)
{
  arr.shift();
  return arr;
}

function removeElementFromBeginningOfArray(arr)
{
  var arr = arr.slice(1);
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr)
{
  arr.pop();
  return arr;
}

function removeElementFromEndOfArray(arr)
{
  var arr = arr.slice(0, arr.length - 1);
  return arr
}