var  chocolateBars = ["snickers", "hundred grand", "kikat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, bounty)
{
  return [bounty, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, bounty)
{
  chocolateBars.unshift(bounty);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, dairymilk)
{
  return [...chocolateBars, dairymilk];
}
function destructivelyAddElementToEndOfArray(chocolateBars, dairymilk)
{
  chocolateBars.push(dairymilk);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index)
{
  return chocolateBars[index];
  }

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars)
{chocolateBars.shift()
return chocolateBars}

function removeElementFromBeginningOfArray(chocolateBars)
{
  return chocolateBars.slice(1) // Since we need the 1st element to be removed - we put 1 in bracs
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars)
{chocolateBars.pop()
return chocolateBars}


function removeElementFromEndOfArray(chocolateBars)
{
  return chocolateBars.slice(0, chocolateBars.length-1)
  // argument 1 - index of 1st element(0) argument 2 - index of last element (array length-1)
}
