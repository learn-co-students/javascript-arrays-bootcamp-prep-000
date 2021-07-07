var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (chocolateBars, twix) {
  return [twix, ...chocolateBars];
};

function destructivelyAddElementToBeginningOfArray (chocolateBars, twix) {
  chocolateBars.unshift(twix)
  return chocolateBars
};

function addElementToEndOfArray (chocolateBars, twix) {
  return [...chocolateBars, twix];
};

function destructivelyAddElementToEndOfArray (chocolateBars, twix) {
  chocolateBars.push(twix);
  return chocolateBars;
};

function accessElementInArray (chocolateBars, index) {
  return chocolateBars[index];
};

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
};

function removeElementFromBeginningOfArray (chocolateBars) {
  return chocolateBars.slice(1);
};

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop();
  return chocolateBars;
};

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1);
};
