var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element);
   return array;
}
function addElementToBeginningOfArray(array, element) {
   newArray = array;
   newArray.unshift(element);
   return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element);
   return array;
}

function addElementToEndOfArray(array, element) {
   pushedArray = array;
   pushedArray.push(element);
   return pushedArray;
}

function accessElementInArray(array, index) {
  return (array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1)

}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length -1)
}
