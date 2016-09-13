var  chocolateBars = ["snickers", "hundred grand", "kikat", "skittles"];

function addElementToBeginningOfArray(chocolateBars, bounty)
{
  chocolateBars = ["bounty", ...chocolateBars];
  return chocolateBars;
}


function destructivelyAddElementToBeginningOfArray(chocolateBars, bounty)
{
chocolateBars.unshift("bounty");
return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, dairymilk)
{
chocolateBars = [...chocolateBars, "dairymilk"];
return chocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, dairymilk)
{
chocolateBars.push("dairymilk");
return chocolateBars;
}
