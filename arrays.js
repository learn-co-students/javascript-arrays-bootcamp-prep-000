var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
function addElementToBeginningOfArray(chocolateBars, name){
  morechocolateBars = [`${name}`,...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, name) {
  chocolateBars.unshift(`${name}`);
}
function addElementToEndOfArray(chocolateBars, name){
  morechocolateBars = [...chocolateBars, '${name}'];
}
function destructivelyAddElementToEndOfArray(chocolateBars, name){
  chocolateBars.push(`${name}`);
}
function accessElementInArray(chocolateBars, Index) {
  console.log(chocolateBars[`${Index}`]);
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift(1);
}
function removeElementFromBeginningOfArray(chocolateBars) {
  lesschocolateBars = chocolateBars.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop(4);
}
function removeElementFromEndofArray(chocolateBars) {
  lesschocolateBars = chocolateBars.slice(0, chocolateBars.length - 1);
}