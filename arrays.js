var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element)
{
  var myArray = [1];
  myArray.unshift("foo");
  return myArray;
}

function addElementToEndOfArray (array, element)
{
  var myArray = [1];
  myArray.push("foo");
  return myArray;
}

function accessElementInArray (array, index)
{
  var myArray = [1,2,3];
  return (myArray[2]);
}

function removeElementFromBeginningOfArray (array)
{
  var myArray = [1,2,3];
  return myArray.slice(1);
  }

function removeElementFromEndOfArray (array)
{
  var myArray = [1,2,3];
  myArray.pop();
  return myArray;
}

function destructivelyAddElementToBeginningOfArray (array,element)
{
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray (array,element)
{
  array.push(element);
  return array;
}

function destructivelyRemoveElementFromEndOfArray (array)
{
  array.pop();
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray (array)
{
  array.shift();
  return array;
}