var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(cat, element) {
  cat.unshift(element);
  return cat;
}
function destructivelyAddElementToBeginningOfArray(cat, element) {
  cat.unshift(element);
  return cat;
}
function addElementToEndOfArray(cat, element) {
  cat.push(element);
  return cat;
}
function destructivelyAddElementToEndOfArray(cat, element) {
cat.push(element);
return cat;
}
function accessElementInArray(cat,index) {
  var cat = [1, 2, 3, 2];
  return (cat[2]);
}
function destructivelyRemoveElementFromBeginningOfArray(cat) {
  cat.shift();
  return cat;
}
function removeElementFromBeginningOfArray(cat) {
  cat.shift();
  return cat;
}
function destructivelyRemoveElementFromEndOfArray(cat) {
  cat.pop();
  return cat;
}
function destructivelyRemoveElementFromEndOfArray(cat) {
  cat.pop();
  return cat;
}
function removeElementFromEndOfArray(cat) {
  var cat = [1, 2, 3];
  var sliced = cat.slice(0,-1);
  return sliced;
}
