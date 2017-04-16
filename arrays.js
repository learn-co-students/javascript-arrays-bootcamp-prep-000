var chocolateBars = ["snickers", "hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray = (arrayArg, eleArg) => {
  return arrayArg.unshift(eleArg);
}

function destructivelyAddElementToBeginningOfArray = (arrayArg, eleArg) => {
  arrayArg = addElementToBeginningOfArray(arrayArg, eleArg);
  return arrayArg;
}