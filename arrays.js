var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars, candy) {
  var chocolateBars2 = ["candy", ...chocolateBars];
  return chocolateBars2;
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, candy) {
  chocolateBars.unshift ("candy");
  return chocolateBars;
}

function addElementToEndOfArray (chocolateBars, candy) {
  var chocolateBars3 = [...chocolateBars, "candy"];
  return chocolateBars3;
}

funtion destructivelyAddElementToEndOfArray (chocolateBars, candy) {
  chocolateBars.push("candy");
  return chocolateBars;
}

function accessElementInArray (chocolateBars, 3) {
  return chocolateBars[3];
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {
  chocolateBars.shift(2);
  return chocolateBars;
}

function removeElementFromBeginningOfArray (chocolateBars) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray (chocolateBars) {
  var chocolateBars4 = chocolateBars.slice(0, chocolateBars.length - 3)
  return chocolateBars4
}
