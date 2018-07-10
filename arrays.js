var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(chocolateBars, newItem) {
  return [newItem, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, newItem) {
  chocolateBars.unshift(newItem);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, newItem) {
  return [...chocolateBars, newItem]; 
}
function destructivelyAddElementToEndOfArray(chocolateBars, newItem) {
  chocolateBars.push(newItem);
  return chocolateBars;
}
function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}
function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}
function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}