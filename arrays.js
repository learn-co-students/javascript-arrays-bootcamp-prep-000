var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];
function addElementToBeginningOfArray(chocolateBars, additionalChocolateBar) {
  var newChocolateBars = [additionalChocolateBar, ...chocolateBars];
  return newChocolateBars;
}
addElementToBeginningOfArray(chocolateBars, "twix");

function destructivelyAddElementToBeginningOfArray(chocolateBars, additionalChocolateBar) {
  chocolateBars.unshift(additionalChocolateBar);
  return chocolateBars;
}

destructivelyAddElementToBeginningOfArray(chocolateBars, "rolos");

function addElementToEndOfArray(chocolateBars, additionalChocolateBar){
  var newChocolateBars = [...chocolateBars, additionalChocolateBar];
  return newChocolateBars;
}

addElementToEndOfArray(chocolateBars, "3 musketeers");

function destructivelyAddElementToEndOfArray(chocolateBars, additionalChocolateBar) {
  chocolateBars.push(additionalChocolateBar);
  return chocolateBars;
}

destructivelyAddElementToEndOfArray(chocolateBars, "milky way");

function accessElementInArray(chocolateBars, indexNumber) {
  return chocolateBars[indexNumber];
}

accessElementInArray(chocolateBars, 2);

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift();
  return chocolateBars;
}
function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
  
}

removeElementFromBeginningOfArray(chocolateBars);

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

destructivelyRemoveElementFromEndOfArray(chocolateBars);

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
}

removeElementFromEndOfArray(chocolateBars);

