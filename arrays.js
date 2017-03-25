var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var function addElementToBeginningOfArray(Array, add) {
  var Array = [add, ...Array];
  consoleLog(Array);
  return Array;
}

var function destructivelyAddElementToBeginningOfArray(Array, add) {
  Array.unshift(add);
  consoleLog(Array);
  return Array;

}
var function accessElementInArray(Array, index) {
    return Array[index];
}
var function destructivelyRemoveElementFromBeginningOfArray(Array) {
  Array.shift();
  consoleLog(Array);
  return Array;
}
var function removeElementFromEndOfArray(Array) {
  Array.slice(0, Array.length -1);
  consoleLog(Array);
  return Array;
}
