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

function accessElementInArray(chocolateBars,index)
{
  return chocolateBars[2];
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars)
{
  chocolateBars.shift()
  return chocolateBars
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars)
{
  chocolateBars.pop()
  return chocolateBars
}

function removeElementFromBeginningOfArray(chocolateBars)
{
  return chocolateBars.slice(1)
}


function removeElementFromEndOfArray(chocolateBars)
{
  return chocolateBars.slice(0, chocolateBars.length-1)
}
