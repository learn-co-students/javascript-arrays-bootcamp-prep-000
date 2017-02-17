var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  array = [element, ...chocolateBars];
  return array;

}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}
function addElementToEndOfArray(array, element) {
  array.push(element)
}
function destructivelyAddElementToEndOfArray(array, element) {
  array = [...chocolateBars, element];
  return array;
}
