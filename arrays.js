var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  const moreArray = [element, ...array];
  return moreArray;
}
function destructivelyAddElementToEndOfArray(array, element){
    array.push(element);
    return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
    array.unshift(element);
    return array;

}
function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift();
   return array;
}

function removeElementFromBeginningOfArray(array) {
  let arrayOne = array.slice(1);
  return arrayOne;
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop();
   return array;
}

function removeElementFromEndOfArray(array) {
  let arrayOne = array.slice(0, array.length-1);
  return arrayOne;
}
function addElementToEndOfArray (array, element) {
  let arrayOne = [ ...array, element];
  return arrayOne;
}
