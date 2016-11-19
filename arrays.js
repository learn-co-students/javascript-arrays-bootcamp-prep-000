var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, el) {
  return [el, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, el) {
  array.unshift(el);
  return array;
}

function addElementToEndOfArray(array,el) {
  return [...array, el]

}

function destructivelyAddElementToEndOfArray(array,el) {
  array.push(el)
  return array
}

function accessElementInArray(array, index) {
 return array[index];
}

function removeElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromEndOfArray(array){
  array.pop()
  return array
}
