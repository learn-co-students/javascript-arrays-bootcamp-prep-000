var chocolateBars = ['snikers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(chocolateBars, element){
  chocolateBars = ['foo', 1]
  return chocolateBars;
}

addElementToBeginningOfArray('foo', 1);

function destructivelyAddElementToBeginningOfArray(chocolateBars, element){

  chocolateBars.unshift(element)

  return chocolateBars;

}

destructivelyAddElementToBeginningOfArray('foo',1);

function addElementToEndOfArray(array, element) {
  return [...array, element]
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

destructivelyAddElementToEndOfArray();


function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}

function accessElementInArray(array, index) {
  return array[index]
}
