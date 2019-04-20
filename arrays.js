var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray ()
{
  var myArray = [1]
  myArray.unshift("foo");
  return myArray
}

function addElementToEndOfArray ()
{
  var myArray = [1]
  myArray.push("foo");
  return myArray
}

function accessElementInArray ()
{
  var myArray = [1,2,3]
  return (myArray[2])
}