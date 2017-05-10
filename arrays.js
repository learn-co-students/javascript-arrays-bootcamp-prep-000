var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (currentArray, newElement)
{
  var newArray = [newElement...currentArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray (currentArray, newElement)
{
  currentArray.unshift(newElement);
  return currentArray;
}

function addElementToEndOfArray (currentArray, newElement)
{
  var newArray = [currentArray...newElement]
  return newArray;
}

function destructivelyAddElementToEndOfArray(currentArray, newElement)
{
  currentArray.push(newElement)
  return currentArray;
}
