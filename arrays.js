var chocolateBars ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, "elementToAdd") {
  var moreChocolateBars = ["elementToAdd", ...chocolateBars]
  return moreChocolateBars;
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, "elementToAdd") {
  chocolateBars.unshift("elementToAdd");
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, "elementToAdd") {
  var extraChocolateBars = [...chocolateBars, "elementToAdd"];
  return extraChocolateBars;
}
function destructivelyAddElementToEndOfArray(chocolateBars, "elementToAdd") {
  chocolateBars.push("elementToAdd");
  return chocolateBars;
}
function accessElementInArray(chocolateBars, 1) {
  return chocolateBars[1];
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift(0);
  return chocolateBars;
}
function removeElementFromBeginningOfArray() {
  chocolateBars.slice(1);
  lessChocolateBars = chocolateBars;
  return lessChocolateBars;
}
function destructivelyRemoveElementFromEndOfArray() {

}
